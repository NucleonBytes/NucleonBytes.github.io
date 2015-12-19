var Nitro = new NitroCore();
Nitro.import("jquery");

function gocreate(){
	var vname = document.getElementById("aname").value;
	var desc = document.getElementById("afolder").value;
	storInfo(vname,desc);
}

function storInfo(appname,appfolder){
	storage.store('appname',appname.toString());
	if (fs.checkFolder(appfolder.toString()) == false)
	{
		fs.createFolder(appfolder.toString());
	}
	storage.store('appfolder',appfolder.toString());
	
	if (net.online()==false){
		alert("Internet Connection is required for Smite to work correctly");
		$("body").addClass("blocked");
	}
	
	var networkCheck = setInterval(function(){
		if (net.online()==true)
		{
			clearInterval(networkCheck);
			window.location.href = 'studio.html';
		}
	}, 100);

}