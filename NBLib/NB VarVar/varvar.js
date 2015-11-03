//NOTE: In order to use this library, you will need to ensure you have jQuery on your HTML page.

function syncVar(varToFind){
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "https://nucleonbytes.github.io/NBLib/NB%20VarVar/var.xml", true);
	txtFile.onreadystatechange = function() {
  		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
    			var allText = txtFile.responseText; 
    	  		var xmlDoc = $.parseXML( allText );
    	  		var xx = $(xmlDoc).find('NucleonBytesVariables').find(varToFind).first().text();
    	  		$(".NBV-"+varToFind).html(xx);
  			}
		}
	}
	txtFile.send(null);
}
