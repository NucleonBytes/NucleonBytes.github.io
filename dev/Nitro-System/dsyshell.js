var dragging = false;
app.setOpt("system.immersive",true);
debug.setOpt("notification.error",true);

var oldTitle = "";

function bindShell(){
	var nav = document.createElement("nav");
	nav.onmousedown = function(){dragOn()};
	nav.onmouseup = function(){dragOff()};
	nav.className = "noselect";

	var ntitle = document.createElement("h1");
	ntitle.className = "title";

	var nclose = document.createElement("h1");
	nclose.className = "ctrl-close";
	nclose.onclick = function(){app.close()};
	nclose.innerHTML = '<i class="material-icons">clear</i>';

	var nmax = document.createElement("h1");
	nmax.className = "ctrl-max";
	nmax.onclick = function(){maxNorm()};
	nmax.innerHTML = '<i class="material-icons">keyboard_arrow_up</i>';

	var nmin = document.createElement("h1");
	nmin.className = "ctrl-min";
	nmin.onclick = function(){app.minimize()};
	nmin.innerHTML = '<i class="material-icons">keyboard_arrow_down</i>';

	var nsp = document.createElement("div");
	nsp.className = "nav-spacer";

	var body   = document.body || document.getElementsByTagName('body')[0]
	body.insertBefore(nsp, body.childNodes[0]);
	body.insertBefore(nav, body.childNodes[0]);

	nav.appendChild(ntitle);
	nav.appendChild(nmin);
	nav.appendChild(nclose);
	nav.appendChild(nmax);

	document.addEventListener("DOMSubtreeModified", function() {
		if (document.title != oldTitle){
			oldTitle=document.title;
			if (document.contains(document.querySelector("nav").querySelector(".title"))){
				document.querySelector("nav").querySelector(".title").innerHTML = oldTitle;
			}
		}
	}, false);
}

var mousex, mousey;
var inte;

var mouse_x, mouse_y;

function setNewP () {
	var offsetX = 0;
	var offsetY = 0;


    var harwid = app.getSize().width/2;

	var kx = (mouse_x - harwid) + offsetX;
	// var kx = (mouse_x - mousex) + offsetX;
    var ky = (mouse_y - mousey) + offsetY;

	app.setPos(kx, mouse_y - 20);
}

function maxNorm(){
	var size = {
  		width: window.innerWidth || document.body.clientWidth,
  		height: window.innerHeight || document.body.clientHeight
	};

	if (app.getSize().width >= screen.width || app.getSize().height >= screen.height){
		app.normal();
	}
	else
	{
		app.maximize();
	}
}

var hld;

function dragOn(){

	hld = setInterval(function(){
		
		if (dragging == true){
			inte = setInterval(function(){
				if (mouse_x != app.getCursor().x || mouse_y != app.getCursor().y){
					mouse_x = app.getCursor().x;
					mouse_y = app.getCursor().y;
					setNewP();
				}
			},10);
			mousex =  app.getPos().x;
 		 	mousey = app.getPos().y;

 		 	setTimeout(function(){
 		 		clearInterval(inte);
 		 	},5000);

 		 	clearInterval(hld);
		}
		dragging = true;
	},100);

	
}

function dragOff(){
	clearInterval(hld)
	dragging=false;
	clearInterval(inte);
}

