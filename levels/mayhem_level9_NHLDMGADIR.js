/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Curse of the Pharaohs';
var init_lemmings = 100;
var min_release_rate = 90;
var play_time = 240;  // seconds
var save_lemmings = 99;
var lemming_types = new Array();
  lemming_types['climb'] = 0;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 20;
  lemming_types['block'] = 1;
  lemming_types['build'] = 12;
  lemming_types['bash'] = 5;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 1;
var level_music = 'tim8p.mid';
var nextlevel_code = 'HLDMGIOEIL';

include('../levels/codebase/cb0099.js');
