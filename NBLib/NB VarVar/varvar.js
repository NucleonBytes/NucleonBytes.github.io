//NOTE: In order to use this library, you will need to ensure you have jQuery on your HTML page.
$(document).ready(function(){
  var all = document.getElementsByTagName("*");
  for (var i=0, max=all.length; i < max; i++) {
    if(all[i].className.indexOf("NBV-") > -1){
      syncVar(all[i].className.split('-')[1]);
    }
  }
});

function syncVar(varToFind){
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "https://nucleonbytes.github.io/NBLib/NB%20VarVar/var.xml", true);//https://nucleonbytes.github.io/NBLib/NB%20VarVar/
	txtFile.onreadystatechange = function() {
  		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
    			var allText = txtFile.responseText; 
    	  		var xmlDoc = $.parseXML( allText );
    	  		var xx = $(xmlDoc).find('NucleonBytesVariables').find(varToFind).first().html();
            if (xx==""){
              //No match found or match is empty so ignore
            }
            else
            {
              $(".NBV-"+varToFind).html(xx);
            }
  			}
		}
	}
	txtFile.send(null);
}
