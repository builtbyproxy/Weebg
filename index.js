#! /usr/bin/env node

var wallpaper = require('wallpaper');

var imgName = "weebgReferenceBackground.jpg";
var pathToModule = require('path').dirname(require.main.filename);
var path = pathToModule + "/" + imgName;

function setWallpaper()
{
    console.log(path);
    wallpaper.set(path);
    console.log("Image Should Be Set");
}

setWallpaper();