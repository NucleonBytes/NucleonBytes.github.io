setInterval(function(){
	if ($('body')[0].scrollTop >= 350){
		showSecondImage();
	}
	if ($('body')[0].scrollTop < 350){
		showFirstImage();
	}
},500);


// IMAGE TRANSITION

function showFirstImage(){
	$('.bgImage#p2').animate({'opacity':'0'},500);
	$('.content').animate({'opacity':'0'});
}

function showSecondImage(){
	$('.bgImage#p2').animate({'opacity':'1'},500);
	$('.content').animate({'opacity':'1'});
}