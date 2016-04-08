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
    
    $(".gal").on("click", function() {
        checkOrients(this);
        $(".lightbox").toggleClass("hidden");
        $(".lightbox").animate({
            opacity:1
        },600);
        $(".gal").attr("opacity","0");
        $(".lightbox img.master").attr("src",$(this).attr("src"));
        
        var attr = $(this).attr('id');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(".lightbox img.master").attr("id",$(this).attr("id"));
        }
        else
        {
            $(".lightbox img.master").attr("id","");
        }
    });
});

function checkOrients(img){
    EXIF.getData(img, function(){
        var myOri = EXIF.getTag(this, "Orientation").toString();
        if (myOri == "6"){
            //rotate90
            $(img).attr("id","rotate90");
        }
    });
}
