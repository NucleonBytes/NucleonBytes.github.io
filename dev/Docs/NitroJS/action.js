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

function filter(val){
    unTouch();
    var itms = document.getElementsByClassName("snip");
    var i;
    if (val.length <=1)
    {
        return;
    }
    for (i = 0; i < itms.length; i++) {
        if (itms[i].title!="search")
        {
            var description = itms[i].getElementsByClassName("snippet-desc")[0].innerHTML.toLowerCase();
            if (description.indexOf(val.toLowerCase()) !=-1) {
                toggleClass(itms[i],"outlined",true);
            }
            else
            {
                toggleClass(itms[i],"hide",true);
            }
        }
    }
}

function unTouch(){
    var itms = document.getElementsByClassName("snip");
    var i;
    for (i = 0; i < itms.length; i++) {
        if (itms[i].title!="search")
        {
            toggleClass(itms[i],"outlined",false);
            toggleClass(itms[i],"hide",false);
        }
    }
}

function toggleClass(element, className, addClassBool){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (addClassBool) {
        classString += ' ' + className;
    }
    else 
    {
        if (classString.indexOf(className) ==-1)
        {
            return;
        }
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}