var Nitro = new NitroCore();
Nitro.import("prefixfree");
Nitro.import("jquery");

app.setminsize("width", 750);
app.setminsize("height", 560);
app.setOpt("system.immersive",true);
app.setOpt("system.style",true);
bindShell();

function setType(val) {
	storage.store("workspace", val.toString());
	if (val == 2) {
		var rootfolder = fs.browseDir();
		if (rootfolder != null) {
			storage.store("rootloc", rootfolder);
			var xname = "";
			var jsc = JSON.parse(fs.readFile(rootfolder+"\\"+findManifestPathFromFolder(rootfolder)));
			xname = jsc.application.name;
			storage.store("appname", xname);
			storage.store("appfolder", rootfolder);
			location.href='studio.html';
		}
		else {

		}
	}
}

function findManifestPathFromFolder(folderpath){
	var thefilepath = "";
	fs.fileSync(folderpath).forEach(function(itm){
		if (itm.substr(itm.lastIndexOf('.')+1) == "jnx"){
			thefilepath = itm
		}
	});
	return thefilepath.substr(thefilepath.lastIndexOf('\\')+1);
}