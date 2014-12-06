/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Watch out, there\'s traps about';
var init_lemmings = 100;
var min_release_rate = 70;
var play_time = 300;  // seconds
var save_lemmings = 80;
var lemming_types = new Array();
  lemming_types['climb'] = 10;
  lemming_types['float'] = 5;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 10;
  lemming_types['build'] = 10;
  lemming_types['bash'] = 5;
  lemming_types['mine'] = 5;
  lemming_types['dig'] = 5;
var level_music = 'tim2p.mid';
var nextlevel_code = 'ICENNONPFJ';

include('../levels/codebase/cb0062.js');
