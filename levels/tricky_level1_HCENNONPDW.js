/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'This should be a doddle!';
var init_lemmings = 100;
var min_release_rate = 50;
var play_time = 240;  // seconds
var save_lemmings = 50;
var lemming_types = new Array();
  lemming_types['climb'] = 10;
  lemming_types['float'] = 10;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 10;
  lemming_types['build'] = 10;
  lemming_types['bash'] = 10;
  lemming_types['mine'] = 10;
  lemming_types['dig'] = 10;
var level_music = 'lemmin1p.mid';
var nextlevel_code = 'CIOLMFLQDU';

include('../levels/codebase/cb0031.js');
