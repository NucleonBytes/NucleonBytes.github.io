//NOTE: In order to use this library, you will need to ensure you have jQuery on your HTML page.
$(document).ready(function(){
	syncVariable("box");
});

function syncVariable (varToFind) {
	var nm;
	alert('syncing');
	$.ajax({
		type: "GET" ,
		url: 'https://nucleonbytes.github.io/NBLib/NB%20VarVar/var.xml' ,
		dataType: "xml" ,
		success: function(xml) {
			alert('testSTART');
			var xmlDoc = $.parseXML( xml );
			alert(xmlDoc);   
			$(xmlDoc).find(varToFind).each(function(){
				alert($(this).text());
				nm= $(this).text();
				$(".NB-var").html(nm);
			})
		}
	});
}
