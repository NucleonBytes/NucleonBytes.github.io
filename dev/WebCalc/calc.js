var pageCount = 1;
var pageLook = 1;
var pageStyleCount = 0;
var responsive = false;
var SEO = false;
var slideshow = false;
var nobranding = false;
var googleAnalytics = false;
var search = false;
var favicon = false;
var donation = false;
var hosting = false;
var domain = false;
var email = false;
var emailCount = 1;
var maintained =false;
var advertise = false;

function calcTotal (isStudent) {
	if (isStudent){
		return (pageCount*(((pageLook+pageStyleCount)/pageLook)*getRating()))/2;
	}
	else
	{
		return pageCount*(((pageLook+pageStyleCount)/pageLook)*getRating());
	}
}

function calcMon (isStudent){
	if (isStudent){
		return (pageCount*getMRating())/2;
	}
	else
	{
		return pageCount*getMRating();
	}
}

function getMRating () {
	var rate = 2;
	if (hosting){
		rate*=25;
	}
	if(domain){
		rate*=10;
	}
	if (email){
		rate = (rate+3)*emailCount;
	}
	if (maintained){
		rate *=2;
	}
	if(advertise){
		rate*=10;
	}
	return rate;
}

function getRating(){
	var rate = 5;
	if (responsive){
		rate*=5;
	}
	if (seo){
		rate*=10;
	}
	if(search){
		rate+=15;
	}
	if (slideshow){
		rate +=15;
	}
	if (nobranding){
		rate*=2;
	}
	if (googleAnalytics){
		rate*=10;
	}	
	if (favicon){
		rate-=5;
	}
	if (donation){
		rate-=10;
	}
	return rate;
}

function checkResp(){
	pageCount = document.getElementById("q1").value;
	pageLook = document.getElementById("q2").selectedIndex +1;
}