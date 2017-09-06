#! /usr/bin/env node

var wallpaper = require('wallpaper');

var pathToModule = require('path').dirname(require.main.filename);
var imgName = "weebgReferenceBackground.jpg";
var path = pathToModule + "/" + imgName;

function setWallpaper()
{
    console.log("Path To BG Image: " + path);
    wallpaper.set(path);
    console.log("Background Successfully Changed!");

}

setWallpaper();
