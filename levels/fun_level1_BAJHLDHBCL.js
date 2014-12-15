/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Just dig!';
var init_lemmings = 10;
var min_release_rate = 50;
var play_time = 300;  // seconds
var save_lemmings = 1;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 0;
  lemming_types['block'] = 0;
  lemming_types['build'] = 0;
  lemming_types['bash'] = 0;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 10;
var level_music = 'tim1p.mid';
var nextlevel_code = 'IJJLDLCCCL';

include('../levels/codebase/cb0001.js');
