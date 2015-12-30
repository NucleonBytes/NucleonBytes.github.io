$(document).ready(function() {
	$('.floaty a').click(function(event) {
		$('html,body').animate({
          scrollTop: $(event.target.getAttribute("href")).offset().top-50
        }, 1000);
		event.preventDefault();
	});
    $('.content-left a').click(function(event) {
		$('html,body').animate({
          scrollTop: $(event.target.getAttribute("href")).offset().top-50
        }, 1000);
		event.preventDefault();
	});
$('.floatX').css('max-height',$(window).height()-50);
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var wheigh = $("html").height() / 2;
    if (scroll == wheigh){
        
    }
    if (scroll > wheigh){
        
    }
    if (scroll < wheigh){
        
    }
});
