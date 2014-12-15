/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Here\'s one I prepared earlier';
var init_lemmings = 100;
var min_release_rate = 55;
var play_time = 480;  // seconds
var save_lemmings = 20;
var lemming_types = new Array();
  lemming_types['climb'] = 40;
  lemming_types['float'] = 40;
  lemming_types['explode'] = 40;
  lemming_types['block'] = 40;
  lemming_types['build'] = 40;
  lemming_types['bash'] = 40;
  lemming_types['mine'] = 40;
  lemming_types['dig'] = 40;
var level_music = 'tim1p.mid';
var nextlevel_code = 'NHLDMCEDEN';

include('../levels/codebase/cb0034.js');
