/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_title = 'The Art Gallery';
var init_lemmings = 100;
var min_release_rate = 20;
var play_time = 240;  // seconds
var save_lemmings = 100;
var lemming_types = new Array();
  lemming_types['climb'] = 10;
  lemming_types['float'] = 10;
  lemming_types['explode'] = 10;
  lemming_types['block'] = 0;
  lemming_types['build'] = 10;
  lemming_types['bash'] = 10;
  lemming_types['mine'] = 0;
  lemming_types['dig'] = 0;
var level_music = 'tim8p.mid';
var nextlevel_code = 'LDLGAJNFGS';

include('../levels/codebase/cb0035.js');
