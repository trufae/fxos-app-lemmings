/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'A ladder would be handy';
var init_lemmings = 100;
var min_release_rate = 50;
var play_time = 360;  // seconds
var save_lemmings = 50;
var lemming_types = new Array();
  lemming_types['climb'] = 20;
  lemming_types['float'] = 20;
  lemming_types['explode'] = 20;
  lemming_types['block'] = 20;
  lemming_types['build'] = 40;
  lemming_types['bash'] = 20;
  lemming_types['mine'] = 20;
  lemming_types['dig'] = 20;
var level_music = 'lemmin3p.mid';
var nextlevel_code = 'MKJNLICCEJ';

include('../levels/codebase/cb0033.js');
