/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Pillars of Hercules';
var init_lemmings = 75;
var min_release_rate = 1;
var play_time = 300;  // seconds
var save_lemmings = 50;
var lemming_types = new Array();
  lemming_types['climb'] = 2;
  lemming_types['float'] = 3;
  lemming_types['explode'] = 4;
  lemming_types['block'] = 2;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 4;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 2;
var level_music = 'tim9p.mid';
var nextlevel_code = 'NDIGEJNFIX';

include('../levels/codebase/cb0100.js');
