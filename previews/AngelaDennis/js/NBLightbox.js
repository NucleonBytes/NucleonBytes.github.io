/*$('#lbtrigger').click(function() { 
	var src = $(this).find('img').attr('src');
	$('.lightbox').css('display','block');
	$('.lightboxdisplay').css('display','block');
	$('.lightboxdisplay').attr('src', src);
 })*/

$('.row').on('click', '#lbtrigger' ,function() { 
	var src = $(this).find('img').attr('src');
	$('.lightbox').css('display','block');
	$('.lightboxdisplay').css('display','block');
	$('.lightboxdisplay').attr('src', src);
 });

$('.lightbox').click( function() { 
	$('.lightbox').css('display','none');
	$('.lightboxdisplay').css('display','none');
 })