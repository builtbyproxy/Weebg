#! /usr/bin/env node

var wallpaper = require('wallpaper');
var fs = require('fs');
var request = require('request');

var imgUrls = ["https://cdn.wallpapersafari.com/89/55/2VKyOb.jpg", "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-169619.jpg", "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-386491.jpg", "http://wallpaperscraft.com/image/cat_girl_nekomimi_art_anime_girl_103991_1920x1080.jpg"];
var imgUrl = "";
var imgName = "";

var pathToModule = require('path').dirname(require.main.filename);
var path = "";


function setImgUrl(){
    var i = Math.floor(Math.random() * (imgUrls.length - 0 + 1)) + 0;
    if(i >= imgUrls.length){i--;}

    //Append
    imgUrl = imgUrls[i];
    imgUrl = "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-517055.jpg";
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
    wallpaper.set(path);
    console.log("3. Image Should Be Set");
}

saveWallpaper();
