/*$('.row').on('click', '#lbtrigger' ,function() {
	var src = $(this).find('img').attr('src');
	$('.lightbox').css('display','block');
	$('.lightboxdisplay').attr('src', src);
	$('.lightboxdisplay').css('display','block');
	var theImage = new Image();
	theImage.src = src;
	var imageWidth = theImage.width;
	var imageHeight = theImage.height;
	var vpWidth = $(window).width();
	var vpHeight = $(window).height();
	var newX = (vpWidth/2)-(imageWidth/2);
	var newY = (vpHeight/2)-(imageHeight/2);
	$('.lightboxdisplay').css('left',newX+"px");
	$('.lightboxdisplay').css('top',newY+"px");
});*/

$('.row').on('click', '#lbtrigger' ,function() {
	var src = $(this).find('img').attr('src');
	$('.lightbox').css('display','block');
	$('.lightboxdisplay').attr('src', src);
	$('.lightboxdisplay').css('display','block');
	var imageWidth = $('.lightboxdisplay').width();
	var imageHeight = $('.lightboxdisplay').height();
	var vpWidth = $(window).width();
	var vpHeight = $(window).height();
	var newX = (vpWidth/2)-(imageWidth/2);
	var newY = (vpHeight/2)-(imageHeight/2);
	$('.lightboxdisplay').css('left',newX+"px");
	$('.lightboxdisplay').css('top',newY+"px");
});

$('.lightbox').click( function() {
	$('.lightbox').css('display','none');
	$('.lightboxdisplay').css('display','none');
})
