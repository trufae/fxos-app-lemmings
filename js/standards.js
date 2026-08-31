/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

// Version information
var app = 'Lemmings&trade;';         // application title
var ver = '1.28';                    // version
var pch = 'e';                       // patch level
var version = app+' v'+ver+pch;      // Full application title
var rts = 1091360050;                // release timestamp

var music = 1;
var sounds = 1;
var animations = 1;

function load_settings() {

  var settings = '';
  var names = ['music', 'sounds', 'animations'];

  try {
    settings = localStorage.getItem('SETTINGS') || '';
  } catch (e) { }

  for (var i = 0; i < names.length; i++) {
    var match = settings.match(new RegExp('[?&]'+names[i]+'=([01])'));
    if (match) window[names[i]] = parseInt(match[1], 10);
  }

}

function save_settings() {

  try {
    localStorage.setItem('SETTINGS', '?music='+music+'&sounds='+sounds+'&animations='+animations);
  } catch (e) { }

}

load_settings();

// assume not mainmenu
var mainmenu = 0;

//detect IE
var ie = window.ActiveXObject? true : false;

// empty placeholder
function init() { }

// default keyhandler
function keyhandler(e) {

  if (!e) e = event;

  var key = e.which || e.keyCode || 0;

  // cancel all functionkeys, redirect on escape
  if (key == 27 || (key >= 112 && key <= 123)) {

    if (mainmenu == 0 && key == 27) redirect('menu.html');

    return cancelEvent(e);

  }

  return true;

}

// Time formatting
function formattime(timestamp) {

  var D = timestamp? new Date(timestamp*1000):new Date();
  var h = D.getHours();
  var m = D.getMinutes();
  var s = D.getSeconds();

  if (h == 24) h = 0;

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  return h+':'+m+':'+s;

}

// Date formatting
function formatdate(timestamp) {

  var D = new Date(timestamp*1000);
  var y = D.getFullYear();
  var m = D.getMonth() + 1;
  var d = D.getDate();

  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;

  return d+'/'+m+'/'+y;

}

function validate(c) {

  return c.substr(0,9).indexOf(String.fromCharCode(84)) == -1;

}

function init_music() {

  // no contextmenu, dragging or selecting
  if (typeof document.oncontextmenu != 'undefined') {
    document.oncontextmenu = cancelEvent;
  } else {
    document.onclick = noRightClick;
  }
  if (typeof document.onselectstart != 'undefined') document.onselectstart = cancelEvent;
  if (typeof document.ondragstart != 'undefined') document.ondragstart = cancelEvent;

  // general keyhandler
  if (typeof document.onhelp != 'undefined') {
    document.onkeydown = keyhandler;
    document.onhelp = cancelEvent;
  } else {
    document.onkeypress = keyhandler;
  }

  window.focus();
  init();

}

function leftClick(e) {

  if (!e) e = event;

  return ((typeof e.which == 'undefined') ? (e.button == 1) : (e.which == 1 || e.button == 0));

}

function noRightClick(e) {

  if (leftClick(e) == false) return cancelEvent(e);

  return true;

}

function cancelPropagation(e) {

  if (!e) e = event;

  if (e.stopPropagation) e.stopPropagation();
  else if (typeof e.cancelBubble != 'undefined') e.cancelBubble = true;

}

function cancelEvent(e) {

  if (!e) e = event;

  if (typeof e.preventDefault != 'undefined') {
    e.preventDefault();
  } else if (typeof e.cancelBubble != 'undefined') {
    if (e.keyCode) e.keyCode = 0;
    e.returnValue = 0;
    e.cancelBubble = true;
  }

  return false;

}

function redirect(url) {

  window.location.replace(url);

}

function include(url) {

  document.write('<scr'+'ipt type="text/javascript" src="'+url+'"><\/scr'+'ipt>');

}
