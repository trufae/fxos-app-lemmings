/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'If at first you don\'t succeed..';
var init_lemmings = 100;
var min_release_rate = 40;
var play_time = 240;  // seconds
var save_lemmings = 99;
var lemming_types = new Array();
  lemming_types['climb'] = 2;
  lemming_types['float'] = 2;
  lemming_types['explode'] = 2;
  lemming_types['block'] = 2;
  lemming_types['build'] = 8;
  lemming_types['bash'] = 2;
  lemming_types['mine'] = 2;
  lemming_types['dig'] = 2;
var level_music = 'tim1p.mid';
var nextlevel_code = 'FMCIKLMOFR';

include('../levels/codebase/cb0061.js');
