#! /usr/bin/env node

var wallpaper = require('wallpaper');
var fs = require('fs');
var request = require('request');

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

async function setImgName(){
    setImgUrl();

    path = pathToModule + "/" + imgName;
    request(imgUrl).pipe(fs.createWriteStream(path));

    console.log("1. Image Should Be Located")
}

function saveWallpaper()
{
    fs.stat(imgName, async function(err, stat) {
        if(err == null)
        {
            fs.unlinkSync(path);
            await setImgName();
            console.log("2. Image Should Be Saved");
            setWallpaper();
        }
        else if(err.code == 'ENOENT')
        {
            await setImgName();
            console.log("2. Image Should Be Saved");
            setWallpaper();
        }
    });
}

function setWallpaper()
{
    console.log("Path Is: " + path);
    wallpaper.set(path);
    console.log("3. Image Should Be Set");
}

saveWallpaper();
