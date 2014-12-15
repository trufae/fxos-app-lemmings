/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky8.gif', 320, 792, 0, 0, 0];
  level_images['door'] = ['doors', 'door4.gif', 50, 82, 226, 604, 4];
  level_images['exit'] = ['ani', 'exit5.gif', 104, 88, 0, 88, 6]; // +88, +44
  level_images['fire1'] = ['ani', 'fire.gif', 40, 128, 280, 108, 6];
  level_images['fire2'] = ['ani', 'fire.gif', 40, 128, 280, 236, 6];
  level_images['fire3'] = ['ani', 'fire.gif', 40, 128, 280, 364, 6];
  level_images['fire4'] = ['ani', 'fire.gif', 40, 128, 280, 492, 6];
  level_images['fire5'] = ['ani', 'fire.gif', 40, 128, 280, 620, 6];
  level_images['steelblock1'] = ['gfx', 'steelblock4.gif', 44, 28, 276, 186, 7];
  level_images['steelblock2'] = ['gfx', 'steelblock4.gif', 44, 28, 276, 320, 7];
  level_images['steelblock3'] = ['gfx', 'steelblock4.gif', 44, 28, 276, 400, 7];
  level_images['steelblock4'] = ['gfx', 'steelblock4.gif', 44, 28, 276, 546, 7];
  level_images['firerock1'] = ['gfx', 'firerock2.gif', 52, 106, 268, 686, 7];
var level_start = 54;
var start_pos = [[228,630]]; // +2, +26

var level = 'a346b3a,40a88b165a93b3a,3a88b3a255b3a,a66ia21b3a255b3a,a88b3a255b3a,7a51b40a255b3a,3a51b3a292b3a,7a51b3a53b232a7b3a,3a51b3a292b3a,21a51b3a3b254a35b3a,3a51b3a292b3a,21a51b3a63b226a3b3a,3a51b3a292b3a,20a19b4a9b3a16b3a292b3a,a18b9a4b5a15b3a292b3a13b4a9b3a,a17b11a2b7a14b3a292b3a12b9a4b5a,a17b22a12b123a26b149a11b11a2b7a,a17b23a11b123a26b149a11b22a,a15b27a9b123a26b149a11b23a,a9b3a2b29a8b3a39b14a53b14a26b14a59b14a59b3a9b27a,a8b36a7b3a39b14a53b14a26b14a59b14a59b3a3b3a2b29a,a7b37a7b3a39b14a53b14a26b14a59b14a59b3a2b36a,a7b40a4b3a39b14a53b14a26b14a59b14a59b3ab37a,a7b41a3b3a39b14a53b14a26b14a59b14a59b3ab40a,a7b42a2b3a39b14a53b14a26b14a59b14a59b3ab41a,a4b2ab42a2b3a39b14a53b14a26b14a59b14a59b3ab42a,a3b47ab3a39b14a53b14a26b14a59b14a59b3ab42a,a3b51a39b14a53b14a26b14a59b14a59b47a,a4b50g39b14g53b14g26b14g59b14g59b49a,a4b50g39b14g53b14g26b14g59b14g59b,2a2b52g39b14g53b14g26b14g59b14g59b49a,ab53g39b14g53b14g26b14g59b14g58b49a,b54g39b14g53b14g26b14g59b14g57b51a,b54g39b14g53b14g26b14g59b14g56b,3ab53g39b14g53b14g26b14g59b14g56b,a2b52g39b14g53b14g26b14g59b14g57b51a,a2b52g39b14g53b14g26b14g59b14g58b50a';
