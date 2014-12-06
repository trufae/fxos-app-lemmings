/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Now use miners and climbers';
var init_lemmings = 10;
var min_release_rate = 1;
var play_time = 300;  // seconds
var save_lemmings = 10;
var lemming_types = new Array();
  lemming_types['climb'] = 10;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 0;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 1;
  lemming_types['dig'] = 0;
var level_music = 'tim4p.mid';
var nextlevel_code = 'LDLCAJNFCK';

include('../levels/codebase/cb0004.js');
