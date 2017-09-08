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
    imgName = "weebgReferenceBackground" + imgUrl.substring(imgUrl.length - 4);
    path = pathToModule + "/" + imgName;
}

async function setImgName(){
    await request(imgUrl).pipe(fs.createWriteStream(path));
    console.log("   1. Image Should Be Located")
}

function saveWallpaper()
{
    setImgUrl();
    console.log("Path Is: " + path);
    fs.stat(path, async function(err, stat){
        if(err == null)
        {
            //Replace Old Wallpaper
            // fs.unlinkSync(path);
            await setImgName();
            console.log("   2. Image Should Be Replaced");

            //Set Wallpaper
            await wallpaper.set(path);
            console.log("   3. Image Should Be Set");
        } else if(err.code == 'ENOENT') {
            await setImgName();
            console.log("   2. Image Should Be Saved");

            //Set Wallpaper
            await wallpaper.set(path);
            console.log("   3. Image Should Be Set");
        }
    });
}

saveWallpaper();
