#! /usr/bin/env node

var wallpaper = require('wallpaper');
var path = './weebgReferenceBackground.jpg';

function setWallpaper()
{
    wallpaper.set(path);
    console.log("Path Is: " + path);
    //
    // wallpaper.get().then(imagePath => {
    //     console.log(imagePath);
    // });
}

setWallpaper();
