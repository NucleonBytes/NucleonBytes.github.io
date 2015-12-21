function fetchSearch(term) {
    var encodedTerm = term.replace(" ", "+");
    alert(encodedTerm);
    $.ajax({
        dataType: "jsonp",
        url: 'http://api.duckduckgo.com/?q=' + encodedTerm + '&format=json&pretty=1&callback=atp',
        success: function (data) {
            alert(JSON.stringify(data));
        },
        error: function () {
            alert("failed")
        }
    });
}

function atp(f) {
    alert("called" + f)
}

function getImg(site) {
    // 'http://api.pagepeeker.com/v2/thumbs.php?size=x&url=apple.com&code=879831f201'
    var imgSite = 'http://api.pagepeeker.com/v2/thumbs.php?size=x&url=' + site + '&code=879831f201'

    var theImage = document.createElement("img");
    theImage.src = imgSite;
    document.body.appendChild(theImage);

    setTimeout(function () {
        var imgData = getBase64Image(theImage);
        localStorage.setItem("imgData", imgData);

        var dataImage = localStorage.getItem('imgData');
        var finImage = document.getElementById('snap');
        finImage.src = "data:image/png;base64," + dataImage;
    }, 1800);


}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}