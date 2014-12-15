/*

   DHTML lemmings(tm)

   GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

   Updated for some html5 by pancake in 2014

 */

function writeSound(file, type, id, loop) {
	var mime = "audio/ogg";
	console.log ("writeSound "+file,id);
	loop = loop?"loop ":"";

	document.write('<audio id="'+id+'" type="'+
		mime+'" src="../html/sound/'+file+'" '+
		loop+' controls=false style="visibility:hidden"></audio>');
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
			alert ("CANNOT RESOLVE "+which);
		}
	} catch(e) {
		alert(which);
	}
}
