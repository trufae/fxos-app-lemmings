/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'As long as you try your best';
var init_lemmings = 100;
var min_release_rate = 99;
var play_time = 300;  // seconds
var save_lemmings = 90;
var lemming_types = new Array();
  lemming_types['climb'] = 20;
  lemming_types['float'] = 20;
  lemming_types['explode'] = 20;
  lemming_types['block'] = 20;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 20;
  lemming_types['mine'] = 20;
  lemming_types['dig'] = 20;
var level_music = 'tim9p.mid';
var nextlevel_code = 'IKHMDLCKCT';

include('../levels/codebase/cb0009.js');
