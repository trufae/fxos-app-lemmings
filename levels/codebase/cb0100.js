/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'mayhem10.gif', 320, 1342, 0, 0, 0];
  level_images['door'] = ['doors', 'door2.gif', 50, 82, 16, 628, 6];
  level_images['exit1'] = ['ani', 'exit3.gif', 48, 68, 62, 64, 6]; // +32, +36
  level_images['exit2'] = ['ani', 'exit3.gif', 48, 68, 62, 1216, 6]; // +32, +36
  level_images['poison1'] = ['ani', 'poison.gif', 40, 128, 258, 366, 6];
  level_images['poison2'] = ['ani', 'poison.gif', 40, 128, 258, 494, 6];
  level_images['poison3'] = ['ani', 'poison.gif', 40, 128, 258, 718, 6];
  level_images['poison4'] = ['ani', 'poison.gif', 40, 128, 258, 846, 6];
  level_images['slope1'] = ['gfx', 'slope5.gif', 48, 32, 250, 366, 7];
  level_images['slope2'] = ['gfx', 'slope6.gif', 48, 32, 250, 590, 7];
  level_images['slope3'] = ['gfx', 'slope5.gif', 48, 32, 250, 718, 7];
  level_images['slope4'] = ['gfx', 'slope6.gif', 48, 32, 250, 942, 7];
  level_images['pillar1'] = ['gfx', 'pillar3.gif', 38, 4, 260, 420, 7];
  level_images['pillar2'] = ['gfx', 'pillar3.gif', 38, 4, 260, 488, 7];
  level_images['pillar3'] = ['gfx', 'pillar3.gif', 38, 4, 260, 850, 7];
  level_images['steelblock1'] = ['gfx', 'steelblock26.gif', 48, 48, 250, 318, 7];
  level_images['steelblock2'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 332, 7];
  level_images['steelblock3'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 380, 7];
  level_images['steelblock4'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 428, 7];
  level_images['steelblock5'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 476, 7];
  level_images['steelblock6'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 524, 7];
  level_images['steelblock7'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 572, 7];
  level_images['steelblock8'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 620, 7];
  level_images['steelblock9'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 668, 7];
  level_images['steelblock10'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 716, 7];
  level_images['steelblock11'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 764, 7];
  level_images['steelblock12'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 812, 7];
  level_images['steelblock13'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 860, 7];
  level_images['steelblock14'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 908, 7];
  level_images['steelblock15'] = ['gfx', 'steelblock26.gif', 48, 48, 298, 956, 7];
  level_images['steelblock16'] = ['gfx', 'steelblock26.gif', 48, 48, 250, 622, 7];
  level_images['steelblock17'] = ['gfx', 'steelblock26.gif', 48, 48, 250, 670, 7];
  level_images['steelblock18'] = ['gfx', 'steelblock26.gif', 48, 48, 250, 974, 7];
var level_start = 308;
var start_pos = [[18,654]]; // +2, +26

var level = 'a87b227a46b227a,a87b226a48b226a,a93b219a50b225a,a93b218a52b219a,a93b217a54b218a,a93b216a56b217a,a101b207a58b216a,a101b206a60b207a,a101b205a62b206a,a101b204a64b205a,a105b199a66b204a,a105b198a68b199a,a105b197a70b198a,a105b196a72b197a,a105b195a74b196a,a105b194a76b195a,a105b193a78b194a,a105b192a80b193a,a123b173a82b192a,a123b172a84b172a,a123b171a86b171a,a123b170a88b170a,a131b161a90b169a,a131b160a92b160a,a131b159a94b159a,a131b158a96b158a,a135b153a98b157a,a135b152a100b152a,a135b151a102b151a,a135b150a104b150a,a135b149a106b149a,a135b148a108b148a,a135b147a110b147a,a135b146a112b146a,a394b145a,a,7a305b17a27b17a,2a320b2a27b2a,3a50ia269b2a27b2a275ia,a320b2a27b2a,7a24b48a248b2a27b2a248b48a,4a32b32a256b2a27b2a256b32a,4a40b16a264b2a27b2a264b16a,18a40b16a256b10a27b10a256b16a,2a40b16a264b2a27b2a264b16a,5a40b16a181b16a67b2a27b2a264b16a,4a40b16a188b2a74b2a27b2a264b16a,5a40b16a147b16a25b2a74b2a27b2a264b16a,4a40b16a154b2a32b2a74b2a27b2a264b16a,11a40b16a154b2a32b2a74b2a27b2a71b8a185b16a,3a40b16a154b2a32b2a74b2a27b2a13b2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a2b8ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a131b16a,a40b16a154b2a32b2a74b2a27b2a13b2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a5b2a4b2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a131b16a,a40b16a154b2a32b2a74b2a27b2a5b10ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a5b2a4b2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab10a123b16a,4a40b16a98b32a24b2a32b2a61b56ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2a5b2a4b2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab2ab32a98b16a,3a40b16a98b32a24b2a32b2a61b56a62b2a58b32a98b16a,a40b16a87b16e24b8a19b2a32b2a57b8e48b8a58b2a52b8e24b16a88b16a,4a40b16a79b24e24b8a19b2a32b2a57b8e48b8a58b2a52b8e24b24a80b16a,2a40b16a79b24e24b8f19b2f32b2f57b8e48b8f58b2f52b8e24b24a80b16a,2a40b16a71b24a8e24b8f19b2f32b2f57b8e48b8f58b2f52b8e24a8b24a72b16a,4a32b32a55b24a16e24b12f15b2f32b2f53b12e48b12f54b2f48b12e24a16b24a56b32a,4a24b48a39b24a24e24b12f15b2f32b2f53b12e48b12f54b2f48b12e24a24b24a40b48a,4a24b48a31b24a32e24b16f11b2f32b2f49b16e48b16f50b2f44b16e24a32b24a32b48a,4a16b64a15b24a47e336a49b24a16b64a,4a8b103a55e336a57b104a,4b103a63e336a65b,3';
