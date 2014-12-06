/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'The Boiler Room';
var init_lemmings = 100;
var min_release_rate = 15;
var play_time = 360;  // seconds
var save_lemmings = 90;
var lemming_types = new Array();
  lemming_types['climb'] = 10;
  lemming_types['float'] = 5;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 10;
  lemming_types['build'] = 30;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'lemmin2p.mid';
var nextlevel_code = 'ONHGEKNNHJ';

include('../levels/codebase/cb0092.js');
