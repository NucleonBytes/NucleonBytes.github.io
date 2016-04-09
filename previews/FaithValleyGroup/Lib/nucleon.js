$(function () {
    console.log("running...");
    updateComponent();
    startRoller();

    var currurl = window.location.pathname;
    var index = currurl.lastIndexOf("/") + 1;
    var filename = currurl.substr(index);
});

$(window).resize(function() {
    updateComponent();
});

function updateComponent(){
    var finalHeight = ($(window).height()/100)*45;
    $("#nucleon-carousel").height(finalHeight);
}

var positionVal = 0;
var imageCount = 0;
function startRoller(){
    imageCount = $("#nucleon-carousel div").length;
    positionVal = imageCount-1;
    var interv = setInterval(function(){
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
    }, 6000);
}
