$(function () {
    updateComponent();
    startRoller();

    var currurl = window.location.pathname;
    var index = currurl.lastIndexOf("/") + 1;
    var filename = currurl.substr(index);
});

$(function(){
    updateComponent();
    startRollerX();

    var currurl = window.location.pathname;
    var index = currurl.lastIndexOf("/") + 1;
    var filename = currurl.substr(index);
});

$(window).resize(function() {
    updateComponent();
});

function toggleNavOptions(){
    $("nav ul li:not(.exception)").toggleClass("powerVisible");
}

function updateComponent(){
    var finalHeight = ($(window).height()/100)*45;
    $("#nucleon-carousel").height(finalHeight);
}

var positionVal = 0;
var imageCount = 0;
function startRoller(){
    imageCount = $("#nucleon-carousel div").length;
    positionVal = imageCount-1;
    changeImages(null);
    var interv = setInterval(function(){
        changeImages(interv);
    }, 6000);
}

function changeImages(interv){
    console.log(positionVal);
        if (positionVal == -1){
            clearInterval(interv);
            return;
        }
        $("#nucleon-carousel div")[positionVal].setAttribute("Class","inactive");
        if (positionVal - 1 <0){
            positionVal = imageCount-1;
        }
        else{
            positionVal-=1;
        }
        $("#nucleon-carousel div")[positionVal].setAttribute("Class","active");
}

function startRollerX(){
    var interv = setInterval(function(){
        var al = $("#nucleon-banner div");
        var ali = [];
        for (var i = 0; i < $("#nucleon-banner div").length; i++) {
            if ($("#nucleon-banner div")[i].getAttribute("Class") == "inactive"){
                ali.push("i");
            }
            else{
                ali.push("a");
            }
        }
        var nali = getPatternNext(ali);
        var nextToBack;
        for (var i = 0; i < nali.length; i++) {
            if (nali[i]=="a"){
                $("#nucleon-banner div")[i].setAttribute("Class","active");
            }
            else{
                $("#nucleon-banner div")[i].setAttribute("Class","inactive");
                nextToBack = $("#nucleon-banner div")[i];
            }
        }
        setTimeout(function(){
            $("#nucleon-banner")[0].appendChild(nextToBack);
        },3000);
    }, 6000);
}

function getPatternNext(currentA){
    // [a,a,a,i,i] => [i,a,a,a,i] => [i,i,a,a,a] => [a,i,i,a,a]
    var wid = $('#nucleon-banner').width();
    if (wid<=770){
        for (var i = 0; i < currentA.length; i++) {
            currentA[i] = "i";
        }
        currentA[currentA.length-1] = "a";
    }
    else{
        if (countOccurence(currentA,"a")==1){
            for (var i = 0; i < currentA.length; i++) {
                currentA[i] = "i";
            }
            currentA[currentA.length-3] = "a";
            currentA[currentA.length-2] = "a";
            currentA[currentA.length-1] = "a";
        }
    }
    var l = currentA.pop();
    currentA.unshift(l);
    return currentA;
}

function countOccurence(arr,itm){
    var counts = {};
    
    for(var i = 0; i< arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    return counts[itm];
}