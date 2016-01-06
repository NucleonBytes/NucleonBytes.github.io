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
        $(".resu").append(li);
    });
}

parseResults("app", 4);

function parseResults(term, count) {
    
    var query = 'http://www.faroo.com/api?q=iphone&start=1&length=10&l=en&src=web&f=xml';
    $.ajax({
        url: query,
        type: 'GET',
        dataType: 'xml',
        success: function (s) {
            alert('success' + s)
        },
        error: function (e) { alert('something went wrong!', e) }
    });

}