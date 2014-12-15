/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'We all fall down';
var init_lemmings = 40;
var min_release_rate = 1;
var play_time = 300;  // seconds
var save_lemmings = 40;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 0;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 40;
var level_music = 'lemmin2p.mid';
var nextlevel_code = 'CAJJDLMBEV';

include('../levels/codebase/cb0032.js');
