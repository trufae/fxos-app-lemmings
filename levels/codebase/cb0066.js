/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'taxing6.gif', 320, 1040, 0, 0, 0];
  level_images['door1'] = ['doors', 'door2.gif', 50, 82, 72, 184, 6];
  level_images['door2'] = ['doors', 'door2.gif', 50, 82, 72, 312, 6];
  level_images['door3'] = ['doors', 'door2.gif', 50, 82, 72, 440, 6];
  level_images['door4'] = ['doors', 'door2.gif', 50, 82, 72, 568, 6];
  level_images['exit'] = ['ani', 'exit3.gif', 48, 68, 224, 836, 6]; // +32, +36
  level_images['trap1'] = ['traps', 'thumper.gif', 30, 64, 282, 210, 6];
  level_images['trap2'] = ['traps', 'thumper.gif', 30, 64, 282, 338, 6];
  level_images['trap3'] = ['traps', 'thumper.gif', 30, 64, 282, 466, 6];
  level_images['trap4'] = ['traps', 'thumper.gif', 30, 64, 282, 594, 6];
  level_images['steelblock1'] = ['gfx', 'steelblock12.gif', 48, 28, 234, 164, 6];
  level_images['steelblock2'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 192, 6];
  level_images['steelblock3'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 240, 6];
  level_images['steelblock4'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 288, 6];
  level_images['steelblock5'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 336, 6];
  level_images['steelblock6'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 384, 6];
  level_images['steelblock7'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 432, 6];
  level_images['steelblock8'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 480, 6];
  level_images['steelblock9'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 528, 6];
  level_images['steelblock10'] = ['gfx', 'steelblock13.gif', 28, 48, 254, 576, 6];
  level_images['steelplate1'] = ['gfx', 'steelplate23.gif', 104, 98, 178, 624, 6];
var level_start = 18;
var start_pos = [[74,210],[74,338],[74,466],[74,594]]; // +2, +26
var traps = [
  [148, 120, 'trap1', 'thud', 1500, 100, 0],
  [148, 184, 'trap2', 'thud', 1500, 100, 0],
  [148, 248, 'trap3', 'thud', 1500, 100, 0],
  [148, 312, 'trap4', 'thud', 1500, 100, 0]
];

var level = 'a40b16a80b16a49b16a48b16a48b16a111b16a,46a32b32a72b16a49b16a48b16a48b16a103b32a,4a24b48a64b16a49b16a48b16a48b16a95b48a,8a32b32a72b16a49b16a48b16a48b16a103b32a,4a40b16a80b16a49b16a48b16a48b16a111b16a,12a40b16a71b32a34b32a32b32a34b30a103b16a,8a40b16a64b48a17b48a16b48a16b48a95b16a,7a40b16a64b48a17b48a16b48a16e48a95b16a,a40b16a40b216e49a95b16a,4a40b16a36b220e49a95b16a,16a40b16a32b224e49a95b16a,4a40b16a28b228e49a95b16a,3a40b16a26e14b216e49a95b16a,10a40b16a26e278a96b16a,a40b16a26e278a76ia19b16a,a40b16a26e278a96b16a,7a32b24a26e278a48b72a,4a24b40a18e278a40b88a,a24b40a336b88a,3a24b48a320b104a,4a16b72a32ha63ha63ha63ha71b120a,a16b72a296b120a,3a8b96a272b136a,4b,4';
