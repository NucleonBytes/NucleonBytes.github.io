//NOTE: In order to use this library, you will need to ensure you have jQuery on your HTML page.
$(document).ready(function(){
	syncVar("box");
});

function syncVar(varToFind){
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "https://nucleonbytes.github.io/NBLib/NB%20VarVar/var.xml", true);
	txtFile.onreadystatechange = function() {
  		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
    			alert("reading");
    			var allText = txtFile.responseText; 
    	  		var xmlDoc = $.parseXML( allText );
    	  		var xx = $(xmlDoc).find('var').find('box').first().text();
    	  		alert(xx);
    	  		$(".NB-var").html(txtFile.responseText);
  			}
		}
	}
	txtFile.send(null);
}