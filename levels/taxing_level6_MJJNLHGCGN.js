/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Compression Method 1';
var init_lemmings = 50;
var min_release_rate = 99;
var play_time = 180;  // seconds
var save_lemmings = 30;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 3;
  lemming_types['block'] = 3;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 5;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 1;
var level_music = 'tim6p.mid';
var nextlevel_code = 'NHNKHGADGU';

include('../levels/codebase/cb0066.js');
