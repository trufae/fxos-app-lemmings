/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Poles Apart';
var init_lemmings = 50;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 45;
var lemming_types = new Array();
  lemming_types['climb'] = 1;
  lemming_types['float'] = 10;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 0;
  lemming_types['build'] = 6;
  lemming_types['bash'] = 4;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 4;
var level_music = 'tim6p.mid';
var nextlevel_code = 'IJHLDMGCIU';

include('../levels/codebase/cb0097.js');
