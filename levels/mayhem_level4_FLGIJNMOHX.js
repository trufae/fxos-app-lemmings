/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'The Crossroads';
var init_lemmings = 100;
var min_release_rate = 99;
var play_time = 60;  // seconds
var save_lemmings = 100;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 0;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 10;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'tim3p.mid';
var nextlevel_code = 'HGAOLMNPHX';

include('../levels/codebase/cb0094.js');
