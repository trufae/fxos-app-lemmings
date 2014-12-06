/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'fun9.gif', 320, 640, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 160, 134, 6];
  level_images['exit'] = ['ani', 'exit3.gif', 48, 68, 200, 434, 6]; // +32, +36
  level_images['shredder1'] = ['ani', 'shredder.gif', 32, 60, 216, 98, 6];
  level_images['shredder2'] = ['ani', 'shredder.gif', 32, 60, 96, 290, 6];
  level_images['shredder3'] = ['ani', 'shredder.gif', 32, 60, 216, 514, 6];
  level_images['poison1'] = ['ani', 'poison.gif', 40, 128, 280, 0, 6];
  level_images['poison2'] = ['ani', 'poison.gif', 40, 128, 280, 128, 6];
  level_images['poison3'] = ['ani', 'poison.gif', 40, 128, 280, 256, 6];
  level_images['poison4'] = ['ani', 'poison.gif', 40, 128, 280, 384, 6];
  level_images['poison5'] = ['ani', 'poison.gif', 40, 128, 280, 512, 6];
  level_images['corner_left'] = ['gfx', 'corner_left.gif', 74, 74, 246, 0, 7];
  level_images['corner_right'] = ['gfx', 'corner_right.gif', 74, 74, 246, 566, 7];
var level_start = 0;
var start_pos = [[162,160]]; // +2, +26

var level = ',2b36a249b,b35a251b,b34a253b,b33a255b,b32a257b,b31a259b,b30a261b,b29a263b,b28a265b,b27a267b,b26a269b,b25a271b,b24a273b,b23a275b,b22a277b,b21a279b,b20a281b,b19a283b,b18a285b,b17a287b,b16a289b,b15a291b,b14a293b,b13a295b,b12a297b,b11a299b,b10a301b,b9a303b,b8a305b,b7a307b,b6a309b,b5a311b,b4a313b,b3a315b,b2a316b,12b2a156e4a156b,b2a154e8a154b,b2a152e12a152b,b2a150e16a150b,3b2a152e12a152b,2b2a145j9a2e4a2j9a145b,b2a145j9e8j9a145b,6b2a145j9a2e4a2j9a145b,b2a133b48a135b,4b2a141b32a143b,4b2a149b16a151b,36b2a60e4a85b16a103e4a44b,b2a58e8a83b16a101e8a42b,b2a56e12a81b16a99e12a40b,b2a54e16a79b16a97e16a38b,3b2a56e12a81b16a99e12a40b,2b2a49j9a2e4a2j9a74b16a68ia23j9a2e4a2j9a33b,b2a49j9e8j9a74b16a92j9e8j9a33b,6b2a49j9a2e4a2j9a74b16a92j9a2e4a2j9a33b,b3a47b229a38b,b4a46b229a37b,b5a45b229a36b,b6a44b229a35b,b7a43b229a34b,b8a56b5a15b5a14b5a39b7a2b5a2b7a41b5a16b5a14b5a56b,b9a55b5a15b5a14b5a38b7a3b5a3b7a40b5a16b5a14b5a55b,b10a54b5a15b5a14b5a37b7a4b5a4b7a39b5a16b5a14b5a54b,b11a53b5a15b5a14b5a36b7a5b5a5b7a38b5a16b5a14b5a53b,b12a52b5a15b5a14b5a35b7a6b5a6b7a37b5a16b5a14b5a52b,b13a51b5a15b5a14b5a34b7a7b5a7b7a36b5a16b5a14b5a51b,b14a50b5a15b5a14b5a33b7a8b5a8b7a35b5a16b5a14b5a50b,b15a49b5a15b5a14b5a32b7a9b5a9b7a34b5a16b5a14b5a49b,b16a48b5a15b5a14b5a31b7a10b5a10b7a33b5a16b5a14b5a48b,b17a47b5a15b5a14b5a30b7a11b5a11b7a32b5a16b5a14b5a47b,b18a46b5a15b5a14b5a29b7a12b5a12b7a31b5a16b5a14b5a46b,b19a45b5a15b5a14b5a28b7a13b5a13b7a30b5a16b5a14b5a45b,b20a44b5a15b5a14b5a27b7a14b5a14b7a29b5a16b5a14b5a44b,b21f278b,b22f276b,b23f274b,b24f272b,b25f270b,b26f268b,b27f266b,b28f264b,b29f262b,b30f260b,b31f258b,b32f256b,b33f254b,b34f252b,b35f250b,b36f248b,b37f246b,2';
