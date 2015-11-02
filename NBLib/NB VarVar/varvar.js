//NOTE: In order to use this library, you will need to ensure you have jQuery on your HTML page.
$(document).ready(function(){
	alert('syncing0');
	syncVariable("box");
});

function syncVariable (varToFind) {
	var nm;
	alert('syncing');
	$.ajax({
		type: "GET" ,
		url: 'var.xml' ,
		dataType: "xml" ,
		success: function(xml) {
			alert('finding');
			var xmlDoc = $.parseXML( xml );   
			$(xmlDoc).find(varToFind).each(function(){
				nm= $(this).text()
				$("div.NB-"+varToFind).html(nm);
			})
		}
	});
}
