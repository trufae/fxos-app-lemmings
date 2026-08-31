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

var music_player = null;
var music_unlock = null;

function musicFile(file, levelnum) {
	var match = String(file || '').match(/(?:tim|lemmin)(\d)/i);
	var track = match? parseInt(match[1], 10):((parseInt(levelnum, 10) - 1) % 9) + 1;
	if (isNaN(track) || track < 1 || track > 9) track = 1;
	return '../levels/music/level-0'+track+'.ogg';
}

function removeMusicUnlock() {
	if (!music_unlock) return;
	document.removeEventListener('pointerdown', music_unlock, true);
	document.removeEventListener('touchstart', music_unlock, true);
	document.removeEventListener('keydown', music_unlock, true);
	music_unlock = null;
}

function resumeMusic() {
	if (!music_player || !music) return;
	var playing = music_player.play();
	if (playing && typeof playing.catch == 'function') {
		playing.catch(function () {
			if (music_unlock) return;
			music_unlock = function () {
				removeMusicUnlock();
				resumeMusic();
			};
			document.addEventListener('pointerdown', music_unlock, true);
			document.addEventListener('touchstart', music_unlock, true);
			document.addEventListener('keydown', music_unlock, true);
		});
	}
}

function playmusic(file, levelnum) {
	stopmusic();
	music_player = document.createElement('audio');
	music_player.id = 'bgmusic';
	music_player.type = 'audio/ogg';
	music_player.src = musicFile(file, levelnum);
	music_player.loop = true;
	music_player.preload = 'auto';
	music_player.style.display = 'none';
	document.body.appendChild(music_player);
	resumeMusic();
}

function stopmusic() {
	removeMusicUnlock();
	if (!music_player) return;
	music_player.pause();
	music_player.removeAttribute('src');
	if (music_player.parentNode) music_player.parentNode.removeChild(music_player);
	music_player = null;
}

function pausemusic() {
	removeMusicUnlock();
	if (music_player) music_player.pause();
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
