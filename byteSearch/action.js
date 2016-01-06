$(document).on("ready", function () {
    $('#searchbox').keyup(function () {
        var dInput = $(this).val();
        console.log(dInput);
        if (dInput.length >=1){
            getRequest(dInput);
        }
        else
        {
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

parseResults("app",4);

function parseResults(term, count){
//     $json=file_get_contents("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+term+"&start="+count);
// $json=json_decode($json,true);

// $data=array();

// foreach ($json['responseData']['results'] as $results) {
//     $data[]=array("url"=>$results['url'],"content"=>$results['content']);
// }

// print_r($data);

    $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+term+"&start="+count, function(result) {
        var obj = $.parseJSON(result);
        var res = obj.responseData.results;
        $.each(res, function(key,val){
            alert(key.toString() + " : "+val.toString());
        });
    });
}