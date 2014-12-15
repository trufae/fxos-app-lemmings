/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Careless clicking costs lives';
var init_lemmings = 100;
var min_release_rate = 20;
var play_time = 300;  // seconds
var save_lemmings = 20;
var lemming_types = new Array();
  lemming_types['climb'] = 20;
  lemming_types['float'] = 20;
  lemming_types['explode'] = 20;
  lemming_types['block'] = 20;
  lemming_types['build'] = 20;
  lemming_types['bash'] = 20;
  lemming_types['mine'] = 20;
  lemming_types['dig'] = 20;
var level_music = 'tim2p.mid';
var nextlevel_code = 'HLDMCIOEET';

include('../levels/codebase/cb0035.js');
