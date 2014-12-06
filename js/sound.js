/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var mimeTypes = new Array();

mimeTypes['midi'] = [
  'application/x-oleobject',
  'video/quicktime',
  'audio/midi',
  'audio/x-midi',
  'application/x-mplayer2'
];
mimeTypes['wav'] = [
  'application/x-oleobject',
  'video/quicktime',
  'audio/wav',
  'audio/x-wav',
  'application/x-mplayer2'
];

var IE_mimetype = 'application/x-oleobject';

function detMime(type) {

  if (window.ActiveXObject || window.GeckoActiveXObject) {

    return IE_mimetype;

  } else if (navigator.mimeTypes &&
             navigator.mimeTypes.length > 0) {

    var mime = navigator.mimeTypes;

    for (var i = 0; i < mimeTypes[type].length; i++) {
      if (mime[mimeTypes[type][i]]) return mimeTypes[type][i];
    }

  }

  return '';

}

function writeSound(file, type, id, loop) {

  var mime = detMime(type);

  if (mime == '') return false;

  if (mime == IE_mimetype) {

    document.write('<object id="'+id+'" classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" type="'+IE_mimetype+'" style="display:none">');
    document.write('<param name="filename" value="sound/'+file+'">');
    document.write('<param name="autostart" value="false">');
    document.write('<param name="loop" value="'+loop+'">');
    document.write('</object>');

  } else {

    document.write('<object id="'+id+'" type="'+mime+'" data="../sound/'+file+'" autostart="false" loop="'+loop+'" style="display:none"></object>');

  }

  return true;

}

function playsound(which) {

  try { document.getElementById(which).Play();  } catch(e) { }

}