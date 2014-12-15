/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'You need bashers this time';
var init_lemmings = 50;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 5;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 0;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 50;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'tim5p.mid';
var nextlevel_code = 'DLCIJNLGCT';

include('../levels/codebase/cb0005.js');
