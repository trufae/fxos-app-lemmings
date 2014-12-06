/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var music = 1;
var sounds = 1;
var animations = 1;
var cheatmode = 0;
var speed = 1;
var ani_speed = 80;
var timer_speed = 60;
var paused = 0;
var kill_all = 0;
var selected_type = null;
var statusmsg = '';
var levelmsg = '';
var newlemming_timer = 0;
var release = null;
var release_speedup;
var release_rate;
var lemmings_out = 0;
var lemmings_home = 0;
var num_lemmings;
var playground;
var target;
var target_img = new Array();
var grid_width;
var target_direction = 'b';
var windowwidth = 560;

function scaleStuff () {
        function viewPort() {
                var h = window.innerHeight
                || document.documentElement.clientHeight
                || document.getElementsByTagName('body')[0].clientHeight;
                var w = window.innerWidth
                || document.documentElement.clientWidth
                || document.getElementsByTagName('body')[0].clientWidth;

                return {width : w, height : h};
        }

        var size = viewPort();
        var pb = document.getElementById("progressbar");
        pb.style.width = size.width - 150;
        windowwidth = size.width- (size.width/4);
                var b = document.getElementById ("content");
		b.style.width = "100%";
                b.style.left = "0px";
                b.style.right= "0px";
                b.style.top = "0px";
                b.style.height = ""+(size.height - 100) + "px";
}
window.onresize = scaleStuff;
document.addEventListener ('DOMContentLoaded', function (e) {
        scaleStuff ();
});

function init() {

  grid_width = level_images['field'][3] / 2;
  level = decompress_level(level);
  if (level.length != 160) {
    redirect('nojavascript.html');
    return;
  }

  parent.document.title = 'Lemmings! - level '+levelnum+' '+rating+' - '+level_title;
  release_rate = min_release_rate;
  num_lemmings = init_lemmings;
  document.getElementById('num_more').firstChild.nodeValue = release_rate;
  document.getElementById('num_less').firstChild.nodeValue = release_rate;
  for (var type in lemming_types) {
    if (lemming_types[type] > 0) document.getElementById('num_'+type).firstChild.nodeValue = lemming_types[type];
  }
  play_time *= 25;
  document.getElementById('time').firstChild.nodeValue = format_time(Math.ceil(play_time/25));
  levelmsg = 'Save '+save_lemmings+' of '+num_lemmings+' Lemmings';
  statusmsg = levelmsg;
  status_message(0);

  playground.style.width = level_images['field'][3]+'px';
  init_scroll();

  // get settings
  music = parent.music;
  sounds = parent.sounds;
  animations = parent.animations;

  // place images
  for (var image in level_images) {
    if (level_images[image][0] != 'doors') place_image(image);
  }

  // set global target
  target = document.getElementById('target');
  target_img['b'] = new Image(); target_img['b'].src = '../img/target.gif';
  target_img['l'] = new Image(); target_img['l'].src = '../img/target_left.gif';
  target_img['r'] = new Image(); target_img['r'].src = '../img/target_right.gif';

  // set keyup handler for target
  document.onkeyup = function() { if (target_direction != 'b') target_direction = 'b'; target.src = target_img['b'].src; }

  document.getElementById('loading').style.visibility = 'hidden';
  document.getElementById('progressbar').style.visibility = 'hidden';
  document.getElementById('controls').style.visibility = 'visible';
  document.getElementById('statusbar').style.visibility = 'visible';
  document.getElementById('scrollbar').style.visibility = 'hidden'; // always hidden, coz in mobiles we can swipe
  document.getElementById('scroller').style.visibility = 'hidden'; // always hidden, coz in mobiles we can swipe
  playground.style.visibility = 'visible';

  // start music
  if (parent.soundEnabled == false) {
    music = 0;
    sounds = 0;
  } else if (sound == false) sounds = 0;
  if (music != 0) parent.frames['bgmusic'].playmusic();

  setTimeout('start_game()', 1000);

}

function start_game() {

  for (var image in level_images) {
    if (level_images[image][0] == 'doors') place_image(image);
  }
  if (sounds) playsound('letsgo');
  setTimeout('timer()', 1000);

}

function toggle_pause(img) {

  paused = 1 - paused;

  if (paused == 0) {

    img.src = '../img/control_pause.gif';
    if (animations != 0) start_animations();
    statusmsg = levelmsg;

  } else {

    img.src = '../img/control_pause_sel.gif';
    if (animations != 0) stop_animations();
    statusmsg = 'Game paused';

  }

  status_message(0);
  if (sounds) playsound('changeop');

}

function status_message(text) {

  document.getElementById('status').firstChild.nodeValue = text? text:statusmsg;

}

function toggle_lemming(type) {

  if (selected_type != null) document.getElementById('lemming_'+selected_type).src = '../img/control_'+selected_type+'.gif';

  if (type != selected_type) {

    document.getElementById('lemming_'+type).src = '../img/control_'+type+'_sel.gif';
    selected_type = type;

  } else {

    document.getElementById('lemming_'+type).src = '../img/control_'+type+'.gif';
    selected_type = null;

  }

  if (sounds) playsound('changeop');

}

function toggle_release(num) {

  if (num > 0) {

    document.getElementById('release_more').src = '../img/control_more_sel.gif';

  } else {

    document.getElementById('release_less').src = '../img/control_less_sel.gif';

  }

  release_speedup = 6;
  change_release(num);

  if (sounds) playsound('changeop');

}

function stop_release() {

  if (release) {
    clearTimeout(release);
    release = null;
  }
  document.getElementById('release_more').src = '../img/control_more.gif';
  document.getElementById('release_less').src = '../img/control_less.gif';

}

function change_release(num) {

  release_rate += num;
  newlemming_timer -= 2 * num;
  if (release_rate > 99) {
    release_rate = 99;
    release = null;
    return;
  }
  if (release_rate < min_release_rate) {
    release_rate = min_release_rate;
    release = null;
    return;
  }
  document.getElementById('num_more').firstChild.nodeValue = release_rate;

  release_speedup--;
  var release_timeout = release_speedup > 0? 200:40;

  release = setTimeout('change_release('+num+')', release_timeout);

}

function speed_up(img) {

  if (speed == 1) {

    speed = 4;
    ani_speed = 20;
    img.src = '../img/control_speed_sel.gif';

  } else {

    speed = 1;
    ani_speed = 80;
    img.src = '../img/control_speed.gif';

  }

  if (sounds) playsound('changeop');

}

function timer() {

  if (paused == 0) {

    if (lemmings_out == 0 && num_lemmings == 0 && num_firework == 0) {
      setTimeout('game_over()', 500);
      return;
    }

    if (speed < play_time) {

      play_time -= speed;
      document.getElementById('time').firstChild.nodeValue = format_time(Math.ceil(play_time/25));

    } else if (play_time != 0) {

      play_time = 0;
      document.getElementById('time').firstChild.nodeValue = format_time(0);

      kill_all = 1;
      var i = lemmings.length;
      while (i-- > 0) {
        if (lemmings[i]) {
          var l = lemmings[i];
          if (lem[l.ani]['nosel'] == 0) l.countdown = 1;
        }
      }
      num_lemmings = 0;

    }

    i = lemmings.length;
    while (i-- > 0) {
      if (lemmings[i]) {
        l = lemmings[i];
        if (l.countdown > 0) {
          if (speed < l.countdown) {
            l.countdown -= speed;
            l.counter.firstChild.nodeValue = Math.ceil(l.countdown/25);
          } else {
            l.countdown = 0;
            l.removecounter();
            l.changeAnimation('explode');
            if (sounds != 0) playsound('ohno');
          }
        }
      }
    }

    if (num_lemmings > 0) {

      newlemming_timer -= speed;
      if (newlemming_timer <= 0) {
        morelemmings();
        newlemming_timer = 109-release_rate;
      }

    }

  }

  if (lemming_targetted > -1) {
    target.style.top = (lemmings[lemming_targetted].top+6)+'px';
    target.style.left = (lemmings[lemming_targetted].left)+'px';
  }

  setTimeout('timer()', timer_speed);

}

function kill_em_all(img) {

  if (kill_all == 0) {

    img.src = '../img/control_nuke_sel.gif';
    num_lemmings = 0;
    kill_all = 1;

    do_countdown(0);

    if (sounds) playsound('changeop');

  }

}

function do_countdown(i) {

  do {

    if (lemmings[i]) {

      var l = lemmings[i];
      if (l.countdown == -1 && lem[l.ani]['nosel'] == 0) {
        l.startcountdown();
        setTimeout('do_countdown('+i+')',ani_speed/2);
        break;
      }

    }

  } while (++i < lemmings.length);

}

function game_over() {

  paused = 1;
  var url = 'result.html?level='+levelnum+'&rating='+rating+'&code='+code+'&numlemmings='+init_lemmings+'&savelemmings='+save_lemmings+'&homelemmings='+lemmings_home;
  if (lemmings_home >= save_lemmings) url += '&nextlevelcode='+nextlevel_code;
  redirect(url);

}

var nukekey = 0;
function keyhandler(e) {

  if (!e) e = event;

  var key = e.which || e.keyCode || 0;

  // double f12 for nuke
  if (key == 123) {

    nukekey++;
    if (nukekey == 2) {
      kill_em_all(document.getElementById('nuke'));
    } else {
      setTimeout('nukekey=0', 500);
    }

  } else {

    nukekey = 0;

    switch(key) {

      case 112:
        // plus (f1)
        toggle_release(+1);
        stop_release();
        break;
      case 113:
        // minus (f2)
        toggle_release(-1);
        stop_release();
        break;
      case 114:
        toggle_lemming('climb');
        break;
      case 115:
        toggle_lemming('float');
        break;
      case 116:
        toggle_lemming('explode');
        break;
      case 117:
        toggle_lemming('block');
        break;
      case 118:
        toggle_lemming('build');
        break;
      case 119:
        toggle_lemming('bash');
        break;
      case 120:
        toggle_lemming('mine');
        break;
      case 121:
        toggle_lemming('dig');
        break;
      case 122:
        // pause (f11)
        toggle_pause(document.getElementById('pause'));
        break;
      case 27:
        // end (escape)
        paused = 1;
        redirect('menu.html');
        break;
      case 49:
        // stop sound (1)
        if (parent.soundEnabled == true) {
          parent.frames['bgmusic'].stopmusic();
          music = 0;
          sounds = 0;
        }
        break;
      case 50:
        // start sound (2)
        if (parent.soundEnabled == true) {
          music = parent.music;
          if (sound) sounds = parent.sounds;
          if (music) parent.frames['bgmusic'].playmusic();
        }
        break;
      case 51:
        // stop animations (3)
        if (animations != 0) {
          if (paused == 0) stop_animations();
          animations = 0;
        }
        break;
      case 52:
        // start animations (4)
        if (animations == 0) {
          if (paused == 0) start_animations();
          animations = 1;
        }
        break;
      case 12:
        // cheat (numpad 5 - numlock off)
        if (cheatmode != 0) {
          lemmings_home = init_lemmings;
          game_over();
        }
        break;
      case 101:
        // cheat (numpad 5)
        if (cheatmode != 0) {
          lemmings_home = init_lemmings;
          game_over();
        }
        break;
      case 53:
        // cheat (mozilla)
        if (cheatmode != 0 && e.which) {
          lemmings_home = init_lemmings;
          game_over();
        }
        break;
      case 37:
        if (target_direction != 'l') {
          target_direction = 'l';
          target.src = target_img['l'].src;
          removetarget();
        }
        break;
      case 39:
        if (target_direction != 'r') {
          target_direction = 'r';
          target.src = target_img['r'].src;
          removetarget();
        }
        break;

    }

  }

  // cancel the event
  return cancelEvent(e);

}

function removetarget() {

  if (target_direction != 'b' && lemming_targetted != -1 &&
      lemmings[lemming_targetted] &&
      lemmings[lemming_targetted].dir != target_direction) {

    target.style.visibility = 'hidden';
    lemming_targetted = -1;

  }

}

function format_time(seconds) {

  var sec = seconds % 60;
  var min = (seconds - sec) / 60;
  if (min <= 0) min = '00';
  else if (min < 10) min = '0' + min;
  if (sec <= 0) sec = '00';
  else if (sec < 10) sec = '0' + sec;
  return 'Time: '+min+':'+sec;

}

function decompress_level(compressed) {

  var uncompressed = [];
  var i = -1, j = 0;
  var p,n,o;

  try {

    var re = /([a-z]*)(\d*)(,?)(\d*)/g

    var matched = re.exec(compressed);

    while (matched[0]) {

      if (j == 0) uncompressed[++i] = [];

      if (matched[1]) {

        n = matched[1].length;
        o = 0;
        do {

          p = matched[1].charCodeAt(o) - 97;
          uncompressed[i][j++] = p;

        } while (++o < n);

        if (matched[2]) {

          n = parseInt(matched[2], 10);
          while (--n) uncompressed[i][j++] = p;
          p = 0;

        }

      } else {

        p = 0;

      }

      if (matched[3]) {

        while (j < grid_width) uncompressed[i][j++] = p;

        if (matched[4]) {

          n = parseInt(matched[4], 10)
          while (--n) {

            j = 0;
            uncompressed[++i] = [];
            while (j < grid_width) uncompressed[i][j] = uncompressed[i-1][j++];

          }

        }

        j = 0;

      }

      matched = re.exec(compressed);

    }

  } catch(e) { }

  return uncompressed;

}

function load_lem(type, dir, num, desc, nosel) {

  lem[type] = new Array();
  lem[type]['num'] = -32*(num-1);
  lem[type]['desc'] = desc;
  lem[type]['nosel'] = nosel;

  if (ie) {

    lem[type]['l'] = new Image();
    lem[type]['r'] = new Image();

    if (dir == 's') {
      lem[type]['l'].src = '../img/lemming_'+type+'_s.gif';
      lem[type]['r'].src = '../img/lemming_'+type+'_s.gif';
    } else {
      lem[type]['l'].src = '../img/lemming_'+type+'_l.gif';
      lem[type]['r'].src = '../img/lemming_'+type+'_r.gif';
    }

  } else {

    if (dir == 's') {
      lem[type]['l'] = 'url("../img/lemming_'+type+'_s.gif")';
      lem[type]['r'] = 'url("../img/lemming_'+type+'_s.gif")';
    } else {
      lem[type]['l'] = 'url("../img/lemming_'+type+'_l.gif")';
      lem[type]['r'] = 'url("../img/lemming_'+type+'_r.gif")';
    }

  }

}

var numpics;
function preload_images() {

  if (level == false) {
    redirect('wrongcode.html');
    return;
  }

  playground = document.getElementById('playground');

  // count images to load
  numpics = 0;
  for (var image in level_images) numpics += ((level_images[image][0] == 'ani' || level_images[image][0] == 'traps')? 2:1);

  // loop to preload
  for (image in level_images) {

    level_images[image][level_images[image][0]] = new Image();
    level_images[image][level_images[image][0]].loaded = false;
    level_images[image][level_images[image][0]].onload = imgloaded;
    level_images[image][level_images[image][0]].onerror = imgloaded;
    level_images[image][level_images[image][0]].onabort = imgloaded;

    level_images[image][level_images[image][0]].src = '../levels/'+level_images[image][0]+'/'+level_images[image][1];

    if (level_images[image][0] == 'ani' || level_images[image][0] == 'traps') {

      level_images[image]['gfx'] = new Image();
      level_images[image]['gfx'].loaded = false;
      level_images[image]['gfx'].onload = imgloaded;
      level_images[image]['gfx'].onerror = imgloaded;
      level_images[image]['gfx'].onabort = imgloaded;

      level_images[image]['gfx'].src = '../levels/gfx/'+level_images[image][1];

    }

  }

  setTimeout('progress()', 100);

}

function imgloaded() {

  this.loaded = true;

}

function progress() {

  var curprogress = 0;
  for (var image in level_images) {

    if (level_images[image][level_images[image][0]].loaded || level_images[image][level_images[image][0]].complete) {
      level_images[image][level_images[image][0]].loaded = true;
      curprogress++;
    }
    if ((level_images[image][0] == 'ani' || level_images[image][0] == 'traps') && (level_images[image]['gfx'].loaded || level_images[image]['gfx'].complete)) {
      level_images[image]['gfx'].loaded = true;
      curprogress++;
    }

  }

  var w = Math.round(curprogress * (windowwidth / numpics));
  document.getElementById('progressbar').style.width = w+'px';

  if (curprogress >= numpics) setTimeout('init_music()',2000);
  else setTimeout('progress()', 100);

}

function start_animations() {

  for (var image in level_images) {

    if (level_images[image][0] == 'ani') level_images[image]['img'].src = level_images[image]['ani'].src;

  }


}

function stop_animations() {

  for (var image in level_images) {

    if (level_images[image][0] == 'ani') level_images[image]['img'].src = level_images[image]['gfx'].src;

  }

}

function place_image(image) {

  var ani = ((level_images[image][0] == 'ani' && animations == 0) || level_images[image][0] == 'traps')? 'gfx':level_images[image][0];

  var e = document.createElement('img');
  e.className = 'element';
  e.style.height = level_images[image][2]+'px';
  e.style.width = level_images[image][3]+'px';
  e.style.top = level_images[image][4]+'px';
  e.style.left = level_images[image][5]+'px';
  e.style.zIndex = level_images[image][6];
  e.src = level_images[image][ani].src;
  playground.appendChild(e);

  level_images[image]['img'] = e;

}
