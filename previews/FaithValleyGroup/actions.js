$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 130) {
        if ($("nav").hasClass("drop") == false) {
            $("nav").addClass("drop")
        }
    }
    else {
        if ($("nav").hasClass("drop") == true) {
            $("nav").removeClass("drop")
        }
    }
});

$(function () {
    $(".lightbox").on("click", function () {
        $(".lightbox").animate({
            opacity:0
        },600);
        $(".lightbox").toggleClass("hidden");
    });
    
    $("#galContainer").on("click",".gal",function(){
        // $(".gal").on("click", function() {
        // checkOrients(this,false);
        console.log("0clicked");
        $(".lightbox").toggleClass("hidden");
        console.log("1toggled");
        $(".lightbox").animate({
            opacity:1
        },600);
        console.log("2opacity");
        $(".gal").attr("opacity","0");
        
        var attr = $(this).attr('id');
        console.log("3id");
        if (typeof attr !== typeof undefined && attr !== false) {
            $(".lightbox img.master").attr("id",$(this).attr("id"));
        }
        else
        {
            $(".lightbox img.master").attr("id","");
        }
        console.log("4lightbox");
        $(".lightbox img.master").attr("src",$(this).attr("src"));
        console.log("5lightbox src");
    });


     $(".gal").on("load",function(){
        checkOrients($(this).get(0),true)
     });
});


function checkOrients(img,replace){
    EXIF.getData(img, function(){
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var myOri = EXIF.getTag(this, "Orientation").toString();
        if (myOri == "6" && iOS == false){
            var itsAttr = $(img).attr("read_exif");
            if(typeof itsAttr != 'undefined') {
                replace = false
            }
            if (replace==true){
                var theParent = $(img).parent().get(0);
                var theLink = $(img).attr("src");
                theParent.removeChild($(img).get(0));
                var newElement = $(document.createElement("img"));
                newElement.attr('src', theLink);
                newElement.attr("id","rotate90");
                newElement.attr('class', "gal");
                newElement.attr('exif', "true");
                newElement.attr('read_exif','false');
                theParent.appendChild(newElement.get(0));
                console.log("replaced image ")
                // <img  exif="true" class="gal" src="images/photo 1.JPG" alt="">
            }
        }
    });
}
