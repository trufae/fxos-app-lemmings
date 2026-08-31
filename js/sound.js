/*

   DHTML lemmings(tm)

   GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

   Updated for some html5 by pancake in 2014

 */

function writeSound(file, type, id, loop) {
	var mime = "audio/ogg";
	console.log ("writeSound "+file,id);
	var player = document.createElement('audio');

	player.id = id;
	player.type = mime;
	player.src = '../html/sound/'+file;
	player.loop = Boolean(loop);
	player.preload = 'auto';
	player.style.display = 'none';
	document.body.appendChild(player);
	return true;
}

function playsound(which) {
	try {
		var s = document.getElementById(which);
		if (s) {
			try {
				s.currentTime = 0;
			} catch(e) {
			}
			s.play();
		} else {
			console.error ("CANNOT RESOLVE "+which);
		}
	} catch(e) {
		console.error(which);
	}
}
