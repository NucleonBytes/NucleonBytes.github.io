var denValue;

$(document).on("ready",function(){
	console.log("ready");
	setUp();

	$(".checkbtn").on("click",function(){
		if ($(".inp").val() == denValue){
			console.log("true");
			setUp();
		}
		else
		{
			console.log("val was "+denValue+ " but " + $(".inp").val() + " entered")
		}
	});
});


function setUp(){
	denValue = randomVal("den");
	console.log(denValue);
	$(".inp").val("");
	$(".num").html(denToBin(denValue));
}


function randomVal(form){
	var randomValue = Math.floor(Math.random() * 70) + 1;
	if (form=="bin"){
		return denToBin(randomValue);
	} 
	else
	{
		return randomValue;
	}
}

function denToBin(den){
	var binValue = (den).toString(2);
	var missingDigits = 8 - binValue.length;
	for (var i =0; i < missingDigits; i++){
		binValue = "0" + binValue;
	}
	return binValue;
}
