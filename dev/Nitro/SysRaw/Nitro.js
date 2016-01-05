function NitroCore(){
    this.Require = function(filepath){
        if ("js"=="js"){ //if filepath is a external JavaScript file
            var fileref=document.createElement('script');
            fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("src", filepath);
        }

        if (typeof fileref!="undefined"){
            document.getElementsByTagName("head")[0].appendChild(fileref);
            return true;
        }
        else
        {
            return false;
        }
    }
    this.import = function(libName){
        var filepath = "";
        switch(libName){
            case "jquery":
                filepath = "http://code.jquery.com/jquery-1.11.3.min.js";
                break;
            case "prefixfree":
                filepath = "https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js";
                break;
            case "angularjs":
                filepath = "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js";
                break;
            default:
                break;
        }
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filepath);
        if (typeof fileref!="undefined"){
            document.getElementsByTagName("head")[0].appendChild(fileref);
            return true;
        }
        else
        {
            return false;
        }
    }
    this.addPermission = function(permissionName){
        permission.add(permissionName);
    }
    this.removePermission = function(permissionName){
        permission.remove(permissionName);
    }
}


function loader(){
    this.manifest = function(jsn){
        var obj = JSON.parse(jsn);
        updateApp.Info('name',obj.application.name);
        updateApp.Info('version',obj.application.version);
        updateApp.Info('nitrixVersion',obj.runtime.version);
        updateApp.Info('icon',obj.application.icon);
        updateApp.Info('homepage',obj.application.homepage);
    }
}
