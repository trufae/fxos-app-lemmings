/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Smile if you love lemmings';
var init_lemmings = 20;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 10;
var lemming_types = new Array();
  lemming_types['climb'] = 20;
  lemming_types['float'] = 20;
  lemming_types['explode'] = 20;
  lemming_types['block'] = 20;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 20;
  lemming_types['mine'] = 20;
  lemming_types['dig'] = 20;
var level_music = 'tenlemsp.mid';
var nextlevel_code = 'OHOLHCALCW';

include('../levels/codebase/cb0010.js');
