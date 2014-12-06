/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Heaven can wait (we hope!!!!)';
var init_lemmings = 100;
var min_release_rate = 1;
var play_time = 120;  // seconds
var save_lemmings = 100;
var lemming_types = new Array();
  lemming_types['climb'] = 30;
  lemming_types['float'] = 30;
  lemming_types['explode'] = 30;
  lemming_types['block'] = 0;
  lemming_types['build'] = 30;
  lemming_types['bash'] = 30;
  lemming_types['mine'] = 30;
  lemming_types['dig'] = 30;
var level_music = 'tim3p.mid';
var nextlevel_code = 'CINNMFMQFY';

include('../levels/codebase/cb0063.js');
