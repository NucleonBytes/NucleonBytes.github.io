
$(function () {
    console.log("running...");
    updateComponent();
    startRoller();
});

$(window).resize(function() {
    updateComponent();
});

function updateComponent(){
    var finalHeight = ($(window).height()/100)*45;
    $("#nucleon-carousel").height(finalHeight);
}


// var positionVal = 0;
// function startRoller(){
//     var imageCount = $("#nucleon-carousel div").length;
//     setInterval(function(){
//         console.log(positionVal);
//         $("#nucleon-carousel div")[positionVal].setAttribute("Class","inactive");
//         if (positionVal + 1 >imageCount-1){
//             positionVal = 0;
//         }
//         else{
//             positionVal+=1;
//         }
//         $("#nucleon-carousel div")[positionVal].setAttribute("Class","active");
//     }, 6000);
// }

var positionVal = 0;
var imageCount = 0;
function startRoller(){
    imageCount = $("#nucleon-carousel div").length;
    positionVal = imageCount-1;
    setInterval(function(){
        console.log(positionVal);
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