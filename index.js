#! /usr/bin/env node

var wallpaper = require('wallpaper');
var path = './bg.jpg';

function setWallpaper()
{
    wallpaper.set(path);
    console.log("Processing");
    //
    // wallpaper.get().then(imagePath => {
    //     console.log(imagePath);
    // });
}

setWallpaper();
