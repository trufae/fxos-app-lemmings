/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'The Prison!';
var init_lemmings = 60;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 45;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 4;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 10;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 3;
var level_music = 'tim5p.mid';
var nextlevel_code = 'MJJNLHGCGN';

include('../levels/codebase/cb0065.js');
