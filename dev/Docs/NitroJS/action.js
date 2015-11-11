function mx(){
	$('.snippet').each(function(i, obj) {
    	$(this).html($(this).html().replace(/var/, '<span style="color: rgb(226,38,90)">$&</span>'));
    	$(this).html($(this).html().replace(/return/, '<span style="color: rgb(226,38,90)">$&</span>'));
		$(this).html($(this).html().replace(/function/, '<span style="color: rgb(226,38,90)">$&</span>'));
		$(this).html($(this).html().replace(/new/, '<span style="color: rgb(125,205,41)">$&</span>'));
		$(this).html($(this).html().replace(/[.][a-zA-Z]+/g, '<span style="color:  rgb(95,189,197)">$&</span>'));
	});
}