/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Lend a helping hand....';
var init_lemmings = 40;
var min_release_rate = 50;
var play_time = 420;  // seconds
var save_lemmings = 30;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 4;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 2;
  lemming_types['mine'] = 2;
  lemming_types['dig'] = 2;
var level_music = 'tim4p.mid';
var nextlevel_code = 'GEJJNDHBGM';

include('../levels/codebase/cb0064.js');
