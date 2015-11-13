function mx(){
	$('.snippet').each(function(i, obj) {
    	$(this).html($(this).html().replace(/boolean/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
    	$(this).html($(this).html().replace(/string/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
    	$(this).html($(this).html().replace(/integer/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
    	$(this).html($(this).html().replace(/return/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
		$(this).html($(this).html().replace(/function/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
		$(this).html($(this).html().replace(/['].*?[']/g, "<span style='color:  orange'>$&</span>"));
    	$(this).html($(this).html().replace(/[a-zA-Z]+[(]+.*[);]/g, "<span style='color:  rgb(95,189,197)'>$&</span>"));
    	$(this).html($(this).html().replace(/var/g, "<span style='color: rgb(226,38,90)'>$&</span>"));
		$(this).html($(this).html().replace(/console/g, "<span style='color:  rgb(95,189,197)'>$&</span>"));
		$(this).html($(this).html().replace(/new/g, "<span style='color: rgb(125,205,41)'>$&</span>"));
    	$(this).html($(this).html().replace(/true/g, "<span style='color: #9370DB'>$&</span>"));
    	$(this).html($(this).html().replace(/false/g, "<span style='color: #9370DB'>$&</span>"));
	});
}