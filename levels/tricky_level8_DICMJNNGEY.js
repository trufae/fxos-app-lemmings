/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Lemming sanctuary in sight';
var init_lemmings = 100;
var min_release_rate = 40;
var play_time = 480;  // seconds
var save_lemmings = 60;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 20;
  lemming_types['build'] = 50;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'lemmin2p.mid';
var nextlevel_code = 'MCENLLDHEV';

include('../levels/codebase/cb0038.js');
