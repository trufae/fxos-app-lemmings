/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Down, along, up. In that order';
var init_lemmings = 80;
var min_release_rate = 80;
var play_time = 300;  // seconds
var save_lemmings = 60;
var lemming_types = new Array();
  lemming_types['climb'] = 2;
  lemming_types['float'] = 2;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 10;
  lemming_types['build'] = 5;
  lemming_types['bash'] = 1;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 5;
var level_music = 'tim4p.mid';
var nextlevel_code = 'GINNONHQHT';

include('../levels/codebase/cb0095.js');
