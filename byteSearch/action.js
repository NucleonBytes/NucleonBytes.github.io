
var currentSearch = 0;
var pageCount = 1;
var currentTerm = "";
    var intv;

$(document).on("ready", function () {
    $('#searchbox').keyup(function () {
        var dInput = $(this).val();
        console.log(dInput);
        if (dInput.length >= 1) {
            getRequest(dInput);
        }
        else {
            $(".resu").empty();
        }
    });
    

    $(document).on('mouseenter', '.resultblock', function (event) {
        var link = $(this).find(".title").attr("href");
        
        intv = setInterval(function(){
            pollImageReady(getHost(link).replace(/.*?:\/\//g, ""));
        },1000);
        
        $(".stay").animate({opacity:1},700);
    }).on('mouseleave', '.resultblock', function () {
        clearInterval(intv);
        $(".stay").animate({opacity:0},400);
        $(".stay").attr("src","https://promotions.coca-cola.com/etc/designs/promotions/img/loading.gif")
    });

    if (document.location.search.length) {
        $("#searchbox").val(document.location.search.split("q=")[1]);
        var terms = $("#searchbox").val();
        $(".resultBox").empty();
        pageCount = 1;
        parseResultsXML(terms, 0);
    } else {
        // no query string exists
    }
});

function pollImageReady(url){
    var site = "http://free.pagepeeker.com/v2/thumbs_ready.php?size=m&url="+url;    
    $.getJSON(site,function(data){
        var obj = JSON.parse(JSON.stringify(data));
        var val = obj.IsReady;
        if (val == 1){
            clearInterval(intv);
            $(".stay").attr("src","http://api3.pagepeeker.com/v2/thumbs.php?size=x&url="+url);
        }
        else
        {
            console.log(val);
            $(".stay").attr("src","https://promotions.coca-cola.com/etc/designs/promotions/img/loading.gif")
        }
    });
}

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        if (currentTerm != "") {
            $(".resultBox").append("<b style='text-align:center'> ~~~ Page " + pageCount + " ~~~ </b>")
            pageCount += 1;
            parseResultsXML(currentTerm, currentSearch + 10);
        }
    }
});

function getRequest(query) {
    $.getJSON("http://suggestqueries.google.com/complete/search?callback=?",
        {
            "hl": "en", // Language                  
            "jsonp": "suggestCallBack", // jsonp callback function name
            "q": query, // query term
            "client": "youtube" // force youtube style response, i.e. jsonp
        }
        );
}

function suggestCallBack(data) {
    var suggestions = [];
    $(".resu").empty();
    $.each(data[1], function (key, val) {
        suggestions.push({ "value": val[0] });
        var li = document.createElement("li");
        li.innerText = val[0];
        li.onclick = function () {
            $("#searchbox").val(val[0]);
            $(".resu").empty();
            var terms = $("#searchbox").val();
            $(".resultBox").empty();
            parseResultsXML(terms, 0);
        };
        $(".resu").append(li);
    });
}

function filterKeyPress(e) {
    var key = e.keyCode;
    if (key == 13) {
        var terms = $("#searchbox").val();
        $(".resultBox").empty();
        pageCount = 1;
        parseResultsXML(terms, 0);
    }
}


function parseResultsXML(term, startAt) {
    currentTerm = term;
    var query = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAdAxmhj88AcMJ82-RL61UJ-3cdqmyEhtU&cx=012139983785816136535:ljxdm-trvww&q=" + term + "&alt=atom&start=" + startAt;
    $.ajax({
        url: query,
        type: 'GET',
        dataType: 'xml',
        success: function (s) {
            formResults(xmlToString(s))
        },
        error: function (e) { parseResultsJSON(term, startAt) }
    });
}

function parseResultsJSON(term, startAt) {
    currentTerm = term;
    var query = "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&num=10&prettyPrint=false&source=gcsc&gss=.com&sig=ee93f9aae9c9e9dba5eea831d506e69a&cx=partner-pub-8993703457585266%3A4862972284&start=" + startAt + "&googlehost=www.google.com&q=" + term + "&callback=called";
    $.ajax({
        url: query,
        type: 'REST',
        dataType: 'jsonp'
    });
}

function called(itm) {
    formJResults(JSON.stringify(itm));
}

function formJResults(jsonS) {
    var $json = $.parseJSON(jsonS);
    $.each($json.results, function (idx, obj) {
        var linc = JSON.stringify($json.results[idx].unescapedUrl);
        var titl = JSON.stringify($json.results[idx].title);
        var desc = JSON.stringify($json.results[idx].content);
        createJResultBlock(titl, linc, desc);
    });
}

function createJResultBlock(xtitle, path, desc) {
    path = path.replace(/^"(.+(?="$))"$/, '$1');
    xtitle = xtitle.replace(/^"(.+(?="$))"$/, '$1');
    desc = desc.replace(/^"(.+(?="$))"$/, '$1');

    var resBlock = document.createElement("div");
    resBlock.className = "resultblock";
    $(".resultBox").append(resBlock);

    var title = document.createElement("a");
    title.className = "title";
    title.innerHTML = xtitle;
    title.href = path;
    resBlock.appendChild(title);

    var xroot = document.createElement("p");
    xroot.className = "root";
    xroot.innerHTML = path;
    resBlock.appendChild(xroot);

    var xdesc = document.createElement("p");
    xdesc.className = "desc";
    xdesc.innerHTML = desc;
    resBlock.appendChild(xdesc);

    var mimg = document.createElement("img");
    mimg.src = "http://www.google.com/s2/favicons?domain=" + getHost(path);
    resBlock.appendChild(mimg);
}

function formResults(xmlS) {
    var xmlDoc = $.parseXML(xmlS);
    var $xml = $(xmlDoc);
    var $results = $xml.find("entry");

    $.each($results, function (i, item) {
        var soort = $(this).attr('gd:kind');
        if (soort == "customsearch#result") {
            var addr = $(this).find("id").text();
            var titl = $(this).find("title").text();
            var desc = $(this).find("summary").text();
            createResultBlock(titl, addr, desc);
        }
    });
    currentStartAt += 10;
}

function createResultBlock(xtitle, path, desc) {
    var resBlock = document.createElement("div");
    resBlock.className = "resultblock";
    $(".resultBox").append(resBlock);

    var title = document.createElement("a");
    title.className = "title";
    title.innerHTML = xtitle;
    title.href = path;
    resBlock.appendChild(title);

    var xroot = document.createElement("p");
    xroot.className = "root";
    xroot.innerHTML = getHost(path);
    resBlock.appendChild(xroot);

    var xdesc = document.createElement("p");
    xdesc.className = "desc";
    xdesc.innerHTML = desc;
    resBlock.appendChild(xdesc);

    var mimg = document.createElement("img");
    mimg.src = "http://www.google.com/s2/favicons?domain=" + getHost(path);
    resBlock.appendChild(mimg);
}

function getHost(address) {
    var att = document.createElement('a');
    att.href = address;
    return att.hostname; // => "example.com"
}

function xmlToString(xmlData) {

    var xmlString;
    //IE
    if (window.ActiveXObject) {
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else {
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString;
}   