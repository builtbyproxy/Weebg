#! /usr/bin/env node

var wallpaper = require('wallpaper');

var pathToModule = require('path').dirname(require.main.filename);
<<<<<<< HEAD
var path = "";

function setImgUrl(){
    var i = Math.floor(Math.random() * (imgUrls.length - 0 + 1)) + 0;
    if(i >= imgUrls.length){i--;}

    //Append
    imgUrl = imgUrls[i];
    imgName = "weebgReferenceBackground" + imgUrl.substring(imgUrl.length - 4);
}

async function setImgName(){
    setImgUrl();
    var path = pathToModule + "/" + imgName;
    var file = fs.createWriteStream(path);

    console.log(path);

    var response = await http.get(imgUrl);
    response.pipe(file);

    //
    // var request = await http.get(imgUrl, function(response) {
    //     response.pipe(file);
    // });

    console.log("1. Image Should Be Located")
}

function saveWallpaper()
{
    fs.stat(imgName, function(err, stat) {
        if(err == null)
        {
            fs.unlinkSync(path);
            setImgName();
        }
        else if(err.code == 'ENOENT')
        {
            setImgName();
        }
    });

    console.log("2. Image Should Be Saved");
    setWallpaper();
}
=======
var imgName = "weebgReferenceBackground.jpg";
var path = pathToModule + "/" + imgName;
>>>>>>> 79d576bcb9cc33ba3e05e5c188008f0299067810

function setWallpaper()
{
    console.log("Path To BG Image: " + path);
    wallpaper.set(path);
    console.log("Background Successfully Changed!");

}

setWallpaper();
