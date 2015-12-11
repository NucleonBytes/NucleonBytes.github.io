$(document).ready(function() {
	$('.floaty a').click(function(event) {
		$('html,body').animate({
          scrollTop: $(event.target.getAttribute("href")).offset().top-50
        }, 1000);
		event.preventDefault();
	});
});