var Nitro = new NitroCore();
Nitro.import("jquery");
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setTabSize(4);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setUseWrapMode(true);
editor.getSession().setMode("ace/mode/html");
editor.setOptions({
	enableBasicAutocompletion: true,
	enableSnippets: true,
	enableLiveAutocompletion: true
});

document.getElementById("buildbtn").innerHTML = '<i class="material-icons">ondemand_video</i>';

var xname = storage.fetch('appname');
var xfolder = storage.fetch('appfolder');

var currentFile = "\\index.html";
prepareStudio(storage.fetch("workspace"));

function prepareStudio(type) {
	if (type == "1") {
		newproject();
		startPollingSave(".ace_text-input");
	}
	if (type == "2") {
		var rootfolder = storage.fetch("rootloc");
		getlistoffiles(rootfolder);
		openFile(xfolder + currentFile);
	}
}

function getlistoffiles(dirPath) {
	var loc = dirPath;
	var listx = fs.fileSync(loc);
	listx.forEach(function (itm) {
		addToSideBar("\\" + itm.substr(itm.lastIndexOf('\\') + 1));
		currentFile = "\\" + itm.substr(itm.lastIndexOf('\\') + 1);
	});
}

function newFILE() {
	var filename_withext = app.userInput("Enter the file name with the extension:", "New File");
	alert(filename_withext);
	var nfile = stringEscape("\\" + filename_withext);
	addToSideBar(nfile);
	openFile(xfolder + nfile);
}

function newproject() {
	openFile(xfolder + "\\index.html");
	addToSideBar("\\index.html");
	addToSideBar("\\" + xname + ".jnx");
	fs.writeFile(xfolder + "\\" + xname + ".jnx", writeManifest(), false);
	addToSideBar("\\style.css");
}

function loadFile(filex) {
	var folderpath = storage.fetch('appfolder');
	var filepathx = folderpath + filex;
	openFile(filepathx);
}

function stringEscape(s) {
    return s ? s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/[\x00-\x1F\x80-\x9F]/g, hex) : s;
    function hex(c) { var v = '0' + c.charCodeAt(0).toString(16); return '\\x' + v.substr(v.length - 2); }
}

function setAceLanguage(lang) {
	editor.getSession().setMode("ace/mode/" + lang)
}

function openFile(filepath) {
	if (fs.checkFile(filepath) == false) {
		fs.createFile(filepath); //Creates a new file if file does not exist
	}
	document.getElementsByClassName('spacedtext')[0].innerHTML = filepath.substr(filepath.lastIndexOf('\\') + 1);
	if (filepath.substr(filepath.lastIndexOf('.') + 1).toLowerCase() == "jnx") {
		stopPollingSave(".ace_text-input");
		setAceLanguage("json");
		editor.setValue(fs.readFile(filepath), 0);
		startPollingSave(".ace_text-input");
	}
	else {
		stopPollingSave(".ace_text-input");
		setAceLanguage(filepath.substr(filepath.lastIndexOf('.') + 1).toLowerCase());
		editor.setValue(fs.readFile(filepath), 0);
		startPollingSave(".ace_text-input");
	}
	currentFile = stringEscape("\\" + filepath.substr(filepath.lastIndexOf('\\') + 1));
}

function addToSideBar(filex) {
	var mydiv = document.getElementsByClassName("sidebar")[0];
	var aTag = document.createElement('li');
	aTag.setAttribute('onclick', "loadFile('\\" + filex + "')");
	aTag.innerHTML = filex;
	mydiv.appendChild(aTag);
	
	//<li onclick="loadFile('pab.html')">pab.html</li>
}

var oldleftVal
var handlex
function startPollingSave(elemSelector) {
    handlex = window.setInterval(function () {

        var element = $(elemSelector);
        if (element.css("left") != oldleftVal) {
			saveDoc();
        }
		oldleftVal = element.css("left");

    }, 1500);
}

editor.on("change", function () {
	stopPollingSave(".ace_text-input");
	startPollingSave(".ace_text-input");
});

function stopPollingSave(elemSelector) {
	window.clearInterval(handlex);
}

function saveDoc() {
	fs.writeFile(xfolder + currentFile, editor.getValue(), false);
}

function writeManifest() {
	var manifest_Vers = 3;
	var appli = {};
	appli.name = xname;
	appli.version = "1.0.0";
	appli.homepage = "*\\index.html";
	appli.icon = "*\\myicon.ico";
	appli.permissions = ["app", "storage"];

	var runti = {};
	runti.version = "1.0.0.6";
	runti.gpu_acceleration = true;
	runti.api = "v1.8"

	var dataobj = {};
	dataobj.manifest_version = manifest_Vers;
	dataobj.application = appli;
	dataobj.runtime = runti;

	return JSON.stringify(dataobj, null, "\t");
}

var build_process_id = 0;

function buildRun() {
	if (document.getElementById("buildbtn").innerHTML == '<i class="material-icons">ondemand_video</i>') {
		var manifestPath = stringEscape(xfolder + "\\" + xname + ".jnx");
		var nitroPath = stringEscape(system.path("runtime_path")+"\\NitroJS.exe");
		build_process_id = system.run(nitroPath, manifestPath);
		document.getElementById("buildbtn").innerHTML = '<i class="material-icons">clear</i>';
	}
	else {
		system.killProcess(build_process_id);
		document.getElementById("buildbtn").innerHTML = '<i class="material-icons">ondemand_video</i>';
	}
}

window.onbeforeunload = function () {
	stopPollingSave(".ace_text-input");
}