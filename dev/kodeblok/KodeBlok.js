
$(document).ready(function(){
  var all = document.getElementsByTagName("*");
  alert("scanning");
  scanfill();
  alert("scan over");
})

function scanfill(){
	var re = new RegExp("[#_]*(.*)(.|\r|\n)*?![\n|#]?"); 
	var str = readfile();
	var m;
	alert(str);
	if ((m = re.exec(str)) !== null) {
	    if (m.index === re.lastIndex) {
	        re.lastIndex++;
	    }
	    alert('hi: '+m[0]);
	}
}

function readfile(){
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "definition.kml", true);//finds the kode markup lang definition
	txtFile.onreadystatechange = function() {
  		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
    			var allText = txtFile.responseText; 
    	  		return allText;
  			}
		}
	}
	txtFile.send(null);
}
