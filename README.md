# GNOME Shell Remove Clock Extension 
GNOME Shell (version 45 &amp; 46) extension to remove (hide) clock on top panel. 
Built for Ubuntu users. Great for screen recordings without showing the embarrasing
time you're recording the video.

## Pre-Requisites
* GNOME Tweaks App (install with ```sudo apt install gnome-tweaks```)
* GNOME Shell (v45 or v46)

Since GNOME Shell is not API stable, extensions only work against a very
specific version of the shell. This extension has only been tested on GNOME
46, but should also work on GNOME 45.

## Installation
* Go to ```/.local/share/gnome-shell/extensions/```
* ```mkdir removeclock@sudfish.com```. **ATTENTION**: Name of dir must match **_uuid_** in extensions' ```metadata.json``` file.
* Copy ```metadata.json``` and ```extension.js``` into created directory.
* Restart GNOME Shell by pressing ```Alt+F2``` and enter 'r'.

## License
Standard MIT license. Feel free to modify as you please.

## Author
Created by [@sudfish](https://github.com/sudfish)
