/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Last one out is a rotten egg!';
var init_lemmings = 100;
var min_release_rate = 55;
var play_time = 300;  // seconds
var save_lemmings = 90;
var lemming_types = new Array();
  lemming_types['climb'] = 5;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 5;
  lemming_types['build'] = 10;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 5;
  lemming_types['dig'] = 5;
var level_music = 'tim7p.mid';
var nextlevel_code = 'NHLDMGADIR';

include('../levels/codebase/cb0098.js');
