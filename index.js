#! /usr/bin/env node

var wallpaper = require('wallpaper');
var http = require('http');
var fs = require('fs');

var imgUrls = ["http://cdn.wallpapersafari.com/89/55/2VKyOb.jpg", "http://www.misucell.com/data/out/9/IMG_340822.png", "http://wallpaperscraft.com/image/cat_girl_nekomimi_art_anime_girl_103991_1920x1080.jpg"];
var imgUrl = ""
var imgName = "";

var pathToModule = require('path').dirname(require.main.filename);
var path = "";

function setImgUrl(){
    var i = Math.floor(Math.random() * (imgUrls.length - 0 + 1)) + 0;
    if(i >= imgUrls.length){i--;}

    //Append
    imgUrl = imgUrls[i];
    imgName = "weebgReferenceBackground" + imgUrl.substring(imgUrl.length - 4);
}

function setImgName(){
    setImgUrl();
    var path = pathToModule + "/" + imgName;
    var file = fs.createWriteStream(path);
    var request = http.get(imgUrl, function(response) {
        response.pipe(file);
    });

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

function setWallpaper()
{
    wallpaper.set(path);
    console.log("3. Image Should Be Set");
}

saveWallpaper();