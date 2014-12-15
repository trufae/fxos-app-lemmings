/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'Perseverance';
var init_lemmings = 20;
var min_release_rate = 50;
var play_time = 240;  // seconds
var save_lemmings = 20;
var lemming_types = new Array();
  lemming_types['climb'] = 2;
  lemming_types['float'] = 1;
  lemming_types['explode'] = 1;
  lemming_types['block'] = 2;
  lemming_types['build'] = 2;
  lemming_types['bash'] = 1;
  lemming_types['mine'] = 1;
  lemming_types['dig'] = 2;
var level_music = 'tim9p.mid';
var nextlevel_code = 'DLGIJNLGGL';

include('../levels/codebase/cb0010.js');
