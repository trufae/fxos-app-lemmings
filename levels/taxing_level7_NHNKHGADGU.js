/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Every Lemming for himself!!!';
var init_lemmings = 100;
var min_release_rate = 55;
var play_time = 180;  // seconds
var save_lemmings = 98;
var lemming_types = new Array();
  lemming_types['climb'] = 1;
  lemming_types['float'] = 0;
  lemming_types['explode'] = 5;
  lemming_types['block'] = 1;
  lemming_types['build'] = 6;
  lemming_types['bash'] = 1;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'tim7p.mid';
var nextlevel_code = 'HLDLGIOEGY';

include('../levels/codebase/cb0034.js');
