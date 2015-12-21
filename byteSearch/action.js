function fetchSearch(term) {
    var encodedTerm = term.replace(" ","+");
    alert(encodedTerm);
    $.ajax({
        dataType: "jsonp",
        url: 'http://api.duckduckgo.com/?q=' + encodedTerm + '&format=json&pretty=1&callback=atp',
        success: function(data){
            alert(JSON.stringify(data));
        },
        error: function(){
            alert("failed")
        }
    });
}

function atp(f){
    alert("called"+f)
}

function getImg(site){
    
}