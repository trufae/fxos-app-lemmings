/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'taxing4.gif', 320, 1572, 0, 0, 0];
  level_images['door1'] = ['doors', 'door1.gif', 50, 82, 200, 700, 6];
  level_images['door2'] = ['doors', 'door1.gif', 50, 82, 200, 828, 6];
  level_images['exit'] = ['ani', 'exit2.gif', 50, 82, 0, 766, 6]; // +34, +44
  level_images['trap1'] = ['traps', 'chain.gif', 82, 34, 208, 978, 6];
  level_images['trap2'] = ['traps', 'pins_right.gif', 52, 26, 144, 570, 6];
  level_images['trap3'] = ['traps', 'pins_left.gif', 52, 26, 96, 596, 6];
  level_images['water1'] = ['ani', 'water.gif', 32, 128, 288, 118, 6];
  level_images['water2'] = ['ani', 'water.gif', 32, 128, 288, 246, 6];
  level_images['rock1'] = ['gfx', 'squarerock3.gif', 40, 84, 280, 44, 7];
  level_images['rock2'] = ['gfx', 'squarerock3.gif', 40, 84, 280, 128, 7];
  level_images['steelplate1'] = ['gfx', 'steelplate21.gif', 96, 28, 180, 542, 7];
  level_images['steelplate2'] = ['gfx', 'steelplate21.gif', 96, 28, 104, 624, 7];
  level_images['steelplate3'] = ['gfx', 'steelplate21.gif', 96, 28, 182, 1000, 7];
  level_images['steelplate4'] = ['gfx', 'steelplate22.gif', 78, 28, 200, 790, 7];
  level_images['steelblock1'] = ['gfx', 'steelblock9.gif', 28, 48, 172, 652, 7];
  level_images['steelblock2'] = ['gfx', 'steelblock9.gif', 28, 48, 124, 748, 7];
  level_images['steelblock3'] = ['gfx', 'steelblock9.gif', 28, 48, 124, 796, 7];
  level_images['steelblock4'] = ['gfx', 'steelblock9.gif', 28, 48, 172, 892, 7];
  level_images['steelblock5'] = ['gfx', 'steelblock10.gif', 48, 48, 152, 700, 7];
  level_images['steelblock6'] = ['gfx', 'steelblock10.gif', 48, 48, 152, 748, 7];
  level_images['steelblock7'] = ['gfx', 'steelblock10.gif', 48, 48, 152, 796, 7];
  level_images['steelblock8'] = ['gfx', 'steelblock10.gif', 48, 48, 152, 844, 7];
  level_images['rock3'] = ['gfx', 'squarerock3.gif', 40, 84, 278, 980, 7];
  level_images['water3'] = ['ani', 'water.gif', 32, 128, 288, 1124, 6];
  level_images['water4'] = ['ani', 'water.gif', 32, 128, 288, 1252, 6];
  level_images['slope1'] = ['gfx', 'slope4.gif', 26, 14, 294, 1124, 7];
  level_images['rock4'] = ['gfx', 'squarerock3.gif', 40, 84, 280, 1364, 7];
var level_start = 505;
var start_pos = [[202,726],[202,854]]; // +2, +26
var traps = [
  [131, 492, 'trap1', 'chain', 4000, 10, 0],
  [80, 286, 'trap2', 'thud', 900, 10, 0],
  [81, 286, 'trap2', 'thud', 900, 10, 0],
  [82, 286, 'trap2', 'thud', 900, 10, 0],
  [83, 286, 'trap2', 'thud', 900, 10, 0],
  [84, 286, 'trap2', 'thud', 900, 10, 0],
  [56, 309, 'trap3', 'thud', 900, 10, 0],
  [57, 309, 'trap3', 'thud', 900, 10, 0],
  [58, 309, 'trap3', 'thud', 900, 10, 0],
  [59, 309, 'trap3', 'thud', 900, 10, 0],
  [60, 309, 'trap3', 'thud', 900, 10, 0]
];

var level = 'a45b34a172b34a223b17a183b34a,9a45b34a172b90a167b17a183b34a,7a45b34a172b90a166b18a183b34a,a45b34a172b34a120ia101b18a183b34a,a45b34a172b34a217b3ab19a183b34a,a45b34a172b34a216b24a183b34a,a45b34a172b34a215b28a180b34a,a45b34a172b34a215b29a179b34a,a45b34a172b34a215b31a177b34a,2a45b34a172b34a215b32a176b34a,a45b34a172b34a84b163a176b34a,2a45b34a172b34a84b164a175b34a,2a45b34a172b34a84b165a174b34a,8a45b34a172b34a27b222a174b34a,11a45b34a172b34a25eb223a174b34a,2a45b34a142b19a11b34a24e2b223a10b19a145b34a,a45b34a141b21a10b34a24e2b223a9b21a144b34a,a45b34a140b23a9b34a24e2be14b208a8b23a143b34a,a45b34a139b25a8b34a24e2be14b208a7b25a142b34a,a45b34a138b27a7b34a24e2be14b208a6b27a141b34a,a45b34a137b29a6b34a25ebe14b208a5b29a140b34a,a45b34a136b31a5b34a24hebe14b208a4b31a139b34a,a45b34a135b33a4b34a24hebe14b208a3b33a138b34a,2a45b34a135b33a4b34a24hebe14b208a3b33a99b19a20b34a18b19a,a7b19a19b34a22b19a94b33a4b34a24hebe14b208a3b33a98b21a19b34a17b21a,a6b21a18b34a21b21a93b33a4b34a25ebe14b208a3b33a97b23a18b34a16b23a,a5b23a17b34a20b23a92b33a4b34a24e2be14b48e48b112a3b33a96b25a17b34a15b25a,a4b25a16b34a19b25a91b33a4b34a24e2be14b48e48b112a3b33a95b27a16b34a14b27a,a3b27a15b34a18b27a90b33a4b34a24e2be14b48e48b112a3b33a94b29a15b34a13b29a,a2b29a14b34a17b29a89b33a4b34a24e2be14b48e48b112a3b33a93b31a14b34a12b31a,ab31a13b34a16b31a88b33a4b34a24e2be14b48e48b112a3b33a92b33a13b34a11b,b33a12b34a15b33a87b33a4b34a25ebe14b48e48b112a3b33a92b33a13b34a11b,b33a12b34a15b33a87b33a4b34a24e2be14b48e48b112a3b33a92b33a13b34a11b,3b33a12b34a15b33a88b31a5b34a24e2be14b48e48b112a4b31a93b33a13b34a11b,b33a12b34a15b33a89b29a6b34ea23e2be14b48e48b112a5b29a94b33a13b34a11b,b33a12b34a15b33a90b27a7b34ea24ebe14b48e48b112a6b27a95b33a13b34a11b,b33a12b34a15b33a91b25a8b34e2a25e14b48e48b112a7b25a96b33a13b34a11b,b33a12b34a15b33a92b23a9b34e2a25e14b48e48b112a8b23a97b33a13b34a11b,b33a12b34a15b33a93b21a10b34e2a25e14b24e96b88a9b21a98b33a13b34a11b,b33a12b34a15b33a94b19a11b34e2a25e14b24e96b88a10b19a99b33a13b34a11b,b33a12b34a15b33a95b17a12b34e2a25e14b24e96b88a11b17a100b33a13b34a11b,b33a12b34a15b33a95b17a12b34ea26e14b24e96b88a11b17a100b33a13b34a11b,b33a12b34a15b33a95b17a12b34eha25e14b24e96b88a11b17a101b31a14b34a12b31a,ab31a13b34a16b31a96b17a12b34eha25e14b24e96b88a11b17a102b29a15b34a13b29a,a2b29a14b34a17b29a97b17a12b34eha25e14b24e96b88a11b17a103b27a16b34a14b27a,a3b27a15b34a18b27a98b17a12b34eha25e14b24e96b88a11b17a104b25a17b34a15b25a,a4b25a16b34a19b25a99b17a12b34eha25e14b24e96b88a11b17a105b23a18b34a16b23a,a5b23a17b34a20b23a100b17a12b34ea26e14b24e96b88a11b17a106b21a19b34a17b21a,a6b21a18b34a21b21a101b17a12b34e2a25e158b64a11b17a107b19a20b34a18b19a,a7b19a13b5ab34ab5a16b19a102b17a12b34e2a25e158b64a11b17a108b17a15b5ab34ab5a13b17a,a9b17a11b50a15b17a103b17a12b34e2a25e158b64a11b17a108b17a13b50a11b17a,a9b17a10b52a14b17a103b17a12b34e2a25e158b64a11b17a108b17a12b52a10b17a,a9b17a10b52a14b17a103b17a12b20e16a25e158b64a11b17a108b17a12b52a10b17a,a9b17a9b54a13b17a103b17a12b20e15a26e158b30e14b20a11b17a108b17a11b54a9b17a,a9b17a9b54a13b17a103b17a12b20e16a25e158b30e14b20a11b17a108b17a11b54a9b17a,4a9b17a10b53a13b17a103b17a12b20e16a25e158b30e14b20a11b17a108b17a12b53a9b17a,a9b17a10b52a14b17a103b17a12b20e15a26e158a30e14b20a11b17a108b17a12b52a10b17a,a9b17a11b50a15b17a103b17a12b20e14a27e158a30e14b20a11b17a108b17a13b50a11b17a,a9b17a13b46a17b17a103b17a12b20e14a27e158a30e14b20a11b17a108b17a15b46a13b17a,a9b17a7b60a9b17a103b17a12b20e14a110e14a91e14b20a11b17a108b17a8b60a6b17a,10a9b17a7b60a9b17a103b17a12b20e14a110e14a87e18b20a11b17a108b17a8b60a6b17a,3a9b17a7b60a9b17a103b17a12b20e14a110e14a91e14b20a11b17a108b17a8b60a6b17a,7a9b110a103b17a12b20e14a110e14a91e14b20a11b17a108b108a,10a9b110a68b84e14a110e14a91e14b20a11b17a108b108a,a9b110a68b84e14a110e14a83ha7e14b20a11b17a108b108a,a9b110a68b84e14a110e14a91e14b20a11b17a108b108a,6a9b110a68b98a110e14a91e14b20a11b17a108b108a,a9b110a68b375a108b108a,7a9b97f81b375f120b96a,a9b97f81b376f119b96a,a9b97f81b377f118b96a,a9b97f81b378f117b96a,a9b97f81b379f116b96a,a9b97f81b380f115b96a,a9b97f81b381f114b96a,a9b97f81b382f113b96a,6a9b97f81b64a285b33f113b96a';
