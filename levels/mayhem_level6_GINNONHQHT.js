/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'One way or another';
var init_lemmings = 75;
var min_release_rate = 50;
var play_time = 240;  // seconds
var save_lemmings = 75;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 0;
  lemming_types['build'] = 15;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 5;
  lemming_types['dig'] = 5;
var level_music = 'tim5p.mid';
var nextlevel_code = 'GAJJLDMBIN';

include('../levels/codebase/cb0039.js');
