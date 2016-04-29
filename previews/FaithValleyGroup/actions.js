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
        checkOrients(this,false);
        $(".lightbox").toggleClass("hidden");
        $(".lightbox").animate({
            opacity:1
        },600);
        $(".gal").attr("opacity","0");
        
        var attr = $(this).attr('id');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(".lightbox img.master").attr("id",$(this).attr("id"));
        }
        else
        {
            $(".lightbox img.master").attr("id","");
        }

        $(".lightbox img.master").attr("src",$(this).attr("src"));
    });


     $(".gal").on("load",function(){
        checkOrients($(this).get(0),true)
     });
});


function checkOrients(img,replace){
    EXIF.getData(img, function(){
        var myOri = EXIF.getTag(this, "Orientation").toString();
        if (myOri == "6"){
            $(img).attr("id","rotate90");
            console.log("rotated image ")
            if (replace==true){
                var theParent = $(img).parent().get(0);
                var theLink = $(img).attr("src");
                theParent.removeChild($(img).get(0));
                var newElement = $(document.createElement("img"));
                newElement.attr('src', theLink);
                newElement.attr("id","rotate90");
                newElement.attr('class', "gal");
                newElement.attr('exif', "true");
                theParent.appendChild(newElement.get(0));
                console.log("replaced image ")
                // <img  exif="true" class="gal" src="images/photo 1.JPG" alt="">
            }
        }
    });
}
