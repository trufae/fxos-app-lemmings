/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Izzie Wizzie lemmings get busy';
var init_lemmings = 5;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 5;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 5;
  lemming_types['build'] = 15;
  lemming_types['bash'] = 5;
  lemming_types['mine'] = 5;
  lemming_types['dig'] = 5;
var level_music = 'mountaip.mid';
var nextlevel_code = 'LGANNLDHGY';

include('../levels/codebase/cb0036.js');
