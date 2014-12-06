/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'mayhem8.gif', 320, 1336, 0, 0, 0];
  level_images['door'] = ['doors', 'door4.gif', 50, 82, 136, 278, 6];
  level_images['exit'] = ['ani', 'exit5.gif', 104, 88, 200, 978, 6]; // +88, +44
  level_images['fire1'] = ['ani', 'fire.gif', 40, 128, 280, 50, 6];
  level_images['fire2'] = ['ani', 'fire.gif', 40, 128, 280, 178, 6];
  level_images['fire3'] = ['ani', 'fire.gif', 40, 128, 280, 306, 6];
  level_images['fire4'] = ['ani', 'fire.gif', 40, 128, 280, 434, 6];
  level_images['fire5'] = ['ani', 'fire.gif', 40, 128, 280, 562, 6];
  level_images['steelplate1'] = ['gfx', 'steelplate26.gif', 72, 64, 248, 634, 7];
  level_images['steelblock1'] = ['gfx', 'steelblock11.gif', 50, 50, 278, 0, 7];
  level_images['steelblock2'] = ['gfx', 'steelblock11.gif', 50, 50, 0, 800, 7];
  level_images['steelblock3'] = ['gfx', 'steelblock11.gif', 50, 50, 50, 800, 7];
  level_images['steelblock4'] = ['gfx', 'steelblock11.gif', 50, 50, 100, 800, 7];
  level_images['steelblock5'] = ['gfx', 'steelblock11.gif', 50, 50, 150, 800, 7];
  level_images['steelblock6'] = ['gfx', 'steelblock11.gif', 50, 50, 200, 800, 7];
  level_images['steelblock7'] = ['gfx', 'steelblock16.gif', 50, 30, 0, 850, 7];
  level_images['steelblock8'] = ['gfx', 'steelblock16.gif', 50, 30, 0, 880, 7];
  level_images['bashrock1'] = ['ani', 'bashrock_right3.gif', 216, 100, 32, 638, 4];
var level_start = 140;
var start_pos = [[138,304]]; // +2, +26

var level = 'a400e55a2b9a10b9a13b9a18b9a13b9a11b9a2b9a,a400e55b17a2b12a2b6a2b12a7b6a2b12a2b6a2b18a2b23a,a400e55b54a2b78a,a400e55b134a,2a400e55b142a,a400e55b143a,a400e55b144a,a400e55b147a,a400e55b148a,a400e55b149a,3a400e55b157a,a400e55b158a,a400e55b159a,a319d50a31e55b159a5b3a,a319d50a31e55b160a4b3a,a319d50a31e55b161a3b3a,2a319d50a31e55b171a,3a319d50a31e55b167a,2a319d50a31e25b197a,3a319d50a31e25b198a,a319d50a31e25b199a,2a319d50a31e25b200a,a319d50a31e25b201a,a319d50a31e25b202a,2a319d50a31e25b203a,a319d50a31e25b204a,a319d50a31e25b204a8b3a,2a319d50a31e25b205a7b3a,a319d50a31e25b206a6b3a,2a319d50a31e25b237a,3a319d50a31e25b209a3b3a,a319d50a31e25b210a2b3a,2a319d50a31e25b211ab3a,6a319d50a31e25b215a,6a319d50a31e25b216a,2a319d50a31e25b217a,7a319d50a31e25b218a,3a319d50a31e25b219a,a319d50a31e25b220a,2a319d50a31e25b221a,a319d50a31e25b222a,a319d50a31e25b223a,2a319d50a31e25b224a,2a319d50a31e25b225a,10a319d50a31e25b226a,3a319d50a31e25b72a12b3a4b,a319d50a31e25b71a13b3a6b,a319d50a31e25b,a319d50a31e25b64a4b158a,a319d50a31e25b63a5b158a,a319d50a31e25b59a9b3a13b3a12b127a,a319d50a31e25b58a10b3a13b3a14b125a,2a319d50a31e25b58a10b3a13b3a14b3a3b119a,a319d50a31e25b52a3b3a10b3a13b3a14b3a3b119a,a319d50a31e25b51a4b3a10b3a13b3a14b3a4b118a,a319d50a31e25b46a9b3a10b3a13b3a14b3a5b117a,a319d50a31e25b44a11b3a10b3a13b3a14b3a6b116a,a319d50a31e25b104a6b116a,a319d50a31e25b226a,a319d50a31e25b222ab3a,a319d50a31e25b39a16b3a42b3a7b116a,a319d50a31e25b39a16b3a42b3a7b3ab112a,a319d50a31e25b33a3b3a16b3a42b3a7b3ab112a,2a319d50a31e25b30a6b3a16b3a42b3a7b3ab112a,a319d50a31e25b28a8b3a16b3a42b3a7b3ab112a,2a119b125a75d50a31e25b21ab3a11b3a16b3a42b3a7b3a2b107ab3a,a119b125a75d50a31e25b21ab3a11b3a16b3a42b3a7b3a2b106a2b3a,a119b125a75d50a31e25a36b3a16b3a42b120a3b3a,a119b125a75d50a31e25a36b3a16b3a42b121a2b3a,a119b125a75d50a31e25a36b3a16b3a42b122ab3a,a119b125a75d50a31e25a36b3a16b3a42b3a7b3a4b109a,a120b123a76d50a31e25a36b3a61b3a7b3a4b109a,a120b107abab13a75e15a67e25a36b3a61b3a7b3a4b109a,a121b105a5b9ab2a75e15a128b3a61b3a7b3a4b105ab3a,a122b86ab17a5b8a3ba75e15a128b3a61b3a7b3a4b109a,a126b3ab78a2b2ab2ab6ab2a7bab3a5ba75e15a128b3a61b3a7b3a4b109a,a131b72a2b2a4ba2bab5a2ba12ba81e15a128b3a61b3a7b3a3b113a,a133b39a2b28a3b2a7ba2b4a97e15a128b3a61b3a7b3a2b114a,a134b3a2b28a2b2a4bab8ab15a4ba8ba2b4a97e15a128b3a61b129a,a140b26a3ba8b7a2b3a3b7a17b3a98e15a128b3a61b126a,a141b7a2b14a5ba8bab5a3ba5b5a19ba99e15a128b3a61b126a,a142b5a4b3a3b7a17b3a11b3a120e15a128b3a61b3a7b116a,a144b2a6ba5b5a19ba135e15a192b3a7b116a,a159b3a156e15a192b3a7b116a,a318e15a192b3a7b3ab112a,3e25a293e15a192b3a7b3ab112a,2e25a293e31a176b3a7b116a,2e25a293e31a162ia9b130a,e25a293e31a172b130a,2e25a292e32a176b126a,2e25g292e32a176b126a,3e25g292e32b302a,9';
