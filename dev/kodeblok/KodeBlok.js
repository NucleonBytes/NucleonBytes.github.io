$(document).ready(function(){
  var all = document.getElementsByTagName("*");
  alert("scanning");
  readfile();
  alert("scan over");
})

function readfile(){
	var thetext = "";
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "definition.kml", true);//finds the kode markup lang definition
	txtFile.onreadystatechange = function() {
  		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
    			thetext = txtFile.responseText;
    			var resu = thetext.match(/[#_]*(.*)(.|\r|\n)*?![\n|#]?"/g);
    			alert("hi");
    			alert(resu[0]);
  			}
  			else
  			{
  				alert("file not found");
  			}
		}
	}
	txtFile.send(null);
}
