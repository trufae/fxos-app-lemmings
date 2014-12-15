/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'It\'s hero time!';
var init_lemmings = 30;
var min_release_rate = 99;
var play_time = 60;  // seconds
var save_lemmings = 30;
var lemming_types = new Array();
  lemming_types['climb'] = 1;
  lemming_types['float'] = 1;
  lemming_types['explode'] = 1;
  lemming_types['block'] = 1;
  lemming_types['build'] = 1;
  lemming_types['bash'] = 1;
  lemming_types['mine'] = 1;
  lemming_types['dig'] = 1;
var level_music = 'lemmin3p.mid';
var nextlevel_code = 'FLGIJNMOHX';

include('../levels/codebase/cb0093.js');
