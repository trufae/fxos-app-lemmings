/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var lemmings = new Array();
var fireworks = new Array();
var num_firework = 0;
var curdoor = 0;
var lemming_targetted = -1;

function lemming_animate(i) {

  if (paused == 0) {

    if (!lemmings[i]) return;

    var l = lemmings[i];
    window['lemming_'+l.ani+'_ani'](l);

    // animation
    if (l.curleft == l.maxleft) l.curleft = 0;
    else l.curleft -= 32;
    if (ie) l.imgpos.left = l.curleft+'px';
    else l.pos.backgroundPosition = l.curleft+'px';
    l.pos.top = l.top+'px';
    l.pos.left = l.left+'px';

    if (l.counter !== null) {
      l.cpos.top = (l.top-4) + 'px';
      l.cpos.left = (l.left+14) + 'px';
    }

  }

  setTimeout('lemming_animate('+i+')', ani_speed); 

}

function morelemmings() {

  num_lemmings--;
  var i = lemmings.length;
  lemmings[i] = new Lemming(i,start_pos[curdoor][0],start_pos[curdoor][1]);
  lemming_animate(i);

  lemmings_out++;
  document.getElementById('out').firstChild.nodeValue = 'Out: '+lemmings_out;

  if (++curdoor == start_pos.length) curdoor = 0;

}

function lemming_target_sel(e) {

  if (leftClick(e) == false) return cancelEvent(e);

  var i = this.number;

  if (paused == 0 && i == lemming_targetted && lemmings[i]) {

    var l = lemmings[i];

    // so many reasons why we shouldn't change a type...

    var changetype = 1;

    if (lemming_types[selected_type] == 0) changetype = 0;
    else if (l.ani == selected_type) changetype = 0;
    else if (lem[l.ani]['nosel'] != 0) changetype = 0;
    else if (selected_type == 'float' && l.floater != 0) changetype = 0;
    else if (selected_type == 'climb' && l.climber != 0) changetype = 0;
    else if (selected_type == 'explode' && l.countdown > -1) changetype = 0;
    else if (l.ani == 'block' && selected_type != 'explode') changetype = 0;
    else if ((l.ani == 'fall' || l.ani == 'float' || l.ani == 'floatstart') && selected_type != 'float') changetype = 0;
    else if (window['lemming_'+selected_type+'_init']) changetype = window['lemming_'+selected_type+'_init'](l);

    if (changetype != 0) {

      lemming_types[selected_type]--;
      document.getElementById('num_'+selected_type).firstChild.nodeValue = (lemming_types[selected_type] > 0)? lemming_types[selected_type]:'';

      if (selected_type == 'float') {
        l.floater = 1;
      } else if (selected_type == 'climb') {
        l.climber = 1;
      } else if (selected_type == 'explode') {
        l.startcountdown();
      } else {
        if (l.ani == 'dig') l.top -= 4;
        l.changeAnimation(selected_type);
      }

      if (sounds != 0) playsound('mousepre');

    } else {

      if (sounds != 0) playsound('ting');

    }

    lemming_targetted = -1;
    document.getElementById('target').style.visibility = 'hidden';
    status_message(0);

    cancelPropagation(e);

  }

  return true;

}

function lemming_target_on(e) {

  if (!e) e = event;
  var i = this.number;

  if (lemmings[i] && selected_type != null &&
      (target_direction == 'b' || target_direction == lemmings[i].dir) ) {

    if (lemming_targetted != i) {

      var l = lemmings[i];
      lemming_targetted = i;

      document.getElementById('target').style.top = (l.top+6)+'px';
      document.getElementById('target').style.left = (l.left)+'px';
      document.getElementById('target').style.visibility = 'visible';
      status_message('Lemming no. '+(i+1)+': '+lem[l.ani]['desc']);

    }

    cancelPropagation(e);

  }

}

function lemming_target_off(e) {

  if (!e) e = event;
  var i = this.number;

  if (lemming_targetted == i) {

    lemming_targetted = -1;
    document.getElementById('target').style.visibility = 'hidden';
    status_message(0);

    cancelPropagation(e);

  }

}

function lemming_dig_init(l) {

  var row = (l.top / 2) + 16;
  var col = (l.left / 2) + 9;

  if (row < 160 && lemming_do['dig'][level[row][col]] != 0) {

    makehole('digger', l.top, l.left);
    l.top += 2;
    makehole('digger', l.top, l.left);
    l.top += 2;

    return 1;

  } else {

    return 0;

  }

}

function lemming_bash_init(l) {

  var row = l.top / 2;
  var col = l.left / 2;

  var dy = 0;
  var i,j;

  if (l.dir == 'r') {

    i = 9;
    do {

      j = col + i;
      if (lemming_do['bash_r'][level[row+15][j]] != 0) {

        dy = i - 11;
        break;

      }

    } while (i++ < 15);

  } else {

    i = 6;
    do {

      j = col + i;
      if (lemming_do['bash_l'][level[row+9][j]] != 0) {

        dy = -5 + i;
        break;

      }

    } while (i-- > 0);

  }

  l.left += 2 * dy;

  return 1;

}

function lemming_block_init(l) {

  var row = l.top / 2;
  var col = l.left / 2;

  for (var j = 0; j < 14; j++) {
    if (level[row+j][col+2] < 10) level[row+j][col+2] += 10;
    if (level[row+j][col+13] < 10) level[row+j][col+13] += 20;
  }

  return 1;

}

function lemming_mine_init(l) {

  var row = (l.top / 2) + 16;
  var col = (l.left / 2) + 9;
  if (row < 160 && lemming_do['mine_'+l.dir][level[row][col]] != 0) {

    return 1;

  } else {

    return 0;

  }

}

function lemming_fall_ani(l) {

  var row = l.top / 2;
  var col = (l.left + l.dx + 18) / 2;

  if (lemming_special_ani(l,row+16,col) == true) {
    l.top += 10;
    return;
  }

  if ((row > 142 || lemming_do['fall'][level[row+17][col]] != 0) &&
      (row > 141 || lemming_do['fall'][level[row+18][col]] != 0)) {

    l.top += 4;
    l.anicounter += 2;

    if (l.floater != 0 && l.anicounter >= 16) l.changeAnimation('floatstart');

    return;

  }

  if (lemming_do['fall'][level[row+17][col]] == 0) {

     l.top += 2;
     l.anicounter++;

  } else {

     l.top += 4;
     l.anicounter += 2;

  }

  if (l.anicounter > 60) {

    l.removecounter();
    l.changeAnimation('splut');
    if (sounds != 0) playsound('splat');

  } else {

    l.changeAnimation('walk');

  }

}

function lemming_floatstart_ani(l) {

  var row = l.top / 2;
  var col = (l.left + l.dx + 18) / 2;

  if (lemming_special_ani(l,row+16,col) == true) {
    l.top += 10;
    return;
  }

  l.top += 2;

  if (row > 142 || lemming_do['fall'][level[row+17][col]] != 0) {

    if (l.curleft == l.maxleft) l.changeAnimation('float');

  } else {

    l.changeAnimation('walk');

  }

}

function lemming_float_ani(l) {

  var row = l.top / 2;
  var col = (l.left + l.dx + 18) / 2;

  if (lemming_special_ani(l,row+16,col) == true) {
    l.top += 10;
    return;
  }

  l.top += 2;

  if (row < 143 && lemming_do['fall'][level[row+17][col]] == 0) l.changeAnimation('walk');

}

function lemming_walk_ani(l) {

  l.left += l.dx;
  var row = (l.top / 2) + 8;
  var col = (l.left / 2) + 9;
  var dy = 0;

  if (lemming_special_ani(l,row,col) == true) return;

  row += 7;
  if (row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
    if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
      if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
        if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
          if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
            if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) { dy--;
              if (--row >= 0 && lemming_do['walk'][level[row][col]] == 0) {
                if (l.climber == 0) {
                  l.changeDirection();
                  return;
                } else {
                  if (l.dir == 'l') l.left += 8;
                  l.changeAnimation('climb');
                  return;
                }
              }
            }
          }
        }
      }
    }

  } else {

    if (++row > 159 || lemming_do['walk'][level[row][col]] != 0) { dy++;
      if (++row > 159 || lemming_do['walk'][level[row][col]] != 0) { dy++;
        if (++row > 159 || lemming_do['walk'][level[row][col]] != 0) { dy++;
          if (++row > 159 || lemming_do['walk'][level[row][col]] != 0) { dy++;
            if (++row > 159 || lemming_do['walk'][level[row][col]] != 0) {
              l.top += 6;
              l.anicounter = 2;
              l.changeAnimation('fall');
              return;
            }
          }
        }
      }

    }

  }

  l.top += 2 * dy;

}

function lemming_dig_ani(l) {

  if (l.curleft == -224 || l.curleft == -480) {

    var row = (l.top / 2) + 15;
    var col = (l.left / 2) + 9;

    makehole('digger', l.top, l.left);

    if (row > 159 || lemming_do['dig'][level[row][col]] == 0) {
      l.top -= 2;
      l.changeAnimation('walk');
    } else {
      l.top += 2;
    }

  }

}

function lemming_bash_ani(l) {

  var row = l.top / 2;

  if (l.curleft == -96 || l.curleft == -576) {

    var col = (l.left + 16 + 3 * l.dx) / 2;
    var bash = 'bash_'+l.dir;

    if (lemming_do[bash][level[row+15][col]] != 0) {

      makehole('basher_'+l.dir, l.top, l.left);

    } else {

      l.changeAnimation('walk');

    }

  } else if ((l.curleft < -288 && l.curleft > -480) || (l.curleft < -800 && l.curleft > -992)) {

      l.left += l.dx;

  }

}

function lemming_build_ani(l) {

  if (l.curleft == l.maxleft) {

    makestep(l.top+30, l.left+(l.dir=='r'? 14:6));

    l.left += 2 * l.dx;
    l.top -= 2;

    var row = l.top / 2;
    var col1 = (l.left / 2) + 9;
    var col2 = col1+(l.dx/2);

    if (++l.anicounter == 12) {

      l.changeAnimation('confused');
      return;

    }

    if (lemming_do['build'][level[row+7][col1]] == 0 ||
        lemming_do['build'][level[row+7][col2]] == 0 ||
        lemming_do['build'][level[row+15][col1]] == 0 ||
        lemming_do['build'][level[row+15][col2]] == 0) {
      l.changeAnimation('walk');
      l.changeDirection();
      return;
    }

    if (lemming_do['block_'+l.dir][level[row+15][col1]] != 0 ||
        lemming_do['block_'+l.dir][level[row+15][col2]] != 0) {
      l.changeDirection();
    }

  } else if (l.curleft == -256 && l.anicounter > 8 && sounds != 0) playsound('chink');

}

function lemming_mine_ani(l) {

  if (l.curleft == 0) {

    l.top += 4;
    l.left += 4*l.dx;

  } else if (l.curleft == -64) {

    makehole('miner_'+l.dir, l.top, l.left);
    var row = (l.top / 2) + 16;
    var col = (l.left / 2) + 9;
    if (row > 159 || lemming_do['mine_'+l.dir][level[row][col]] == 0) l.changeAnimation('fall');

  }

}

function lemming_block_ani(l) {

  var row = l.top / 2;
  var col = l.left / 2;

  if (lemming_do['fall'][level[row+16][col+9]] != 0) {

    for (var j = 0; j < 14; j++) {
      if (level[row+j][col+2] >= 10) level[row+j][col+2] -= 10;
      if (level[row+j][col+13] >= 20) level[row+j][col+13] -= 20;
    }

    l.changeAnimation('fall');

  }

}

function lemming_climb_ani(l) {

  var row = l.top / 2;
  var col = l.left / 2;

  if (l.curleft == l.maxleft) {

    if (lemming_do['climb'][level[row+3][col+7]] == 0) {
      l.changeDirection();
      l.changeAnimation('fall');
    } else {
      l.top -= 8;
    }

  } else {

    col += (l.dir == 'r'? 10:5);

    if (l.curleft == 0 && lemming_do['climb'][level[row+8][col]] != 0) {
      l.changeAnimation('climbtop');
    } else if (l.curleft == -32 && lemming_do['climb'][level[row+7][col]] != 0) {
      l.top -= 2;
      l.changeAnimation('climbtop');
    } else if (l.curleft == -64 && lemming_do['climb'][level[row+6][col]] != 0) {
      l.top -= 4;
      l.changeAnimation('climbtop');
    } else if (l.curleft == -96 && lemming_do['climb'][level[row+5][col]] != 0) {
      l.top -= 6;
      l.changeAnimation('climbtop');
    } else if (l.curleft == -128 && lemming_do['climb'][level[row+4][col]] != 0) {
      l.top -= 8;
      l.changeAnimation('climbtop');
    }

  }

}

function lemming_climbtop_ani(l) {

  if (l.curleft == l.maxleft) {
    l.top -= 14;
    l.left += (l.dir == 'r'? 2:-6);
    l.changeAnimation('walk');
  }

}

function lemming_confused_ani(l) {

  if (l.curleft == l.maxleft) {

    l.left -= 2*l.dx;
    l.changeAnimation('walk');

  }

}

function lemming_home_ani(l) {

  if (l.curleft == l.maxleft) lemming_home(l);

}

function lemming_splut_ani(l) {

  if (l.curleft == l.maxleft) lemming_die(l);

}

function lemming_drown_ani(l) {

  if (l.curleft == l.maxleft) {
    lemming_die(l);
    return;
  }

  var row = l.top / 2;
  var col = l.left / 2;

  if (l.curleft < -96 && lemming_do['drown'][level[row+7][col+7]] != 0) l.top += 2 * (Math.floor(Math.random() * 3) - 1);
  else l.top += 2;
  if (lemming_do['drown'][level[row+8][col+4]] != 0 && lemming_do['drown'][level[row+8][col+11]] != 0) l.left += 2* (Math.floor(Math.random() * 3) - 1);
  else l.left += (lemming_do['drown'][level[row+8][col+4]] == 0? 2:-2);

}

function lemming_frie_ani(l) {

  if (l.curleft == l.maxleft) lemming_die(l);

}

function lemming_explode_ani(l) {

  if (l.curleft == l.maxleft) lemming_explode(l);

}

function lemming_special_ani(l,row,col) {

  try {

    if (level[row][col] < 5) return false;

  } catch(e) {

    if (l.top > 319) {
      lemming_die(l);
      return true;
    }
    if ((col < 0 || col >= grid_width) && 
         l.ani != 'fall' && l.ani != 'float' && l.ani != 'floatstart') {
      l.changeAnimation('fall');
      return true;
    }
    return false;

  }

  var grid = level[row][col];

  if (lemming_do['drown'][grid] != 0) {
    l.changeAnimation('drown');
    if (sounds != 0) playsound('glug');
    return true;
  }
  if (lemming_do['frie'][grid] != 0) {
    l.changeAnimation('frie');
    if (sounds != 0) playsound('fire');
    return true;
  }
  if (lemming_do['slice'][grid] != 0) {
    l.changeAnimation('frie');
    if (sounds != 0) playsound('slicer');
    return true;
  }

  if (l.ani == 'walk') {

    if (lemming_do['block_'+l.dir][grid] != 0) {
      l.changeDirection();
      return true;
    }
    if (lemming_do['home'][grid] != 0) {
      l.removecounter();
      l.changeAnimation('home');
      if (sounds != 0) playsound('yippee');
      return true;
    }
    if (lemming_do['trap'][grid] != 0) {

      var i = traps.length;
      while (i-- > 0) {
        if (row == traps[i][0] && col == traps[i][1] && traps[i][6] == 0) {
          traps[i][6] = 1;
          l.remove();
          level_images[traps[i][2]]['img'].src = level_images[traps[i][2]]['traps'].src;
          setTimeout('reset_trap('+i+')', traps[i][4]);
          if (sounds != 0) setTimeout('playsound(\''+traps[i][3]+'\')', traps[i][5]);
          return true;
        }
      }

    }

  }

  return false;

}

function reset_trap(i) {

  level_images[traps[i][2]]['img'].src = level_images[traps[i][2]]['gfx'].src;
  traps[i][6] = 0;
  lemmings_out--;
  document.getElementById('out').firstChild.nodeValue = 'Out: '+lemmings_out;

}

function lemming_explode(l) {

  var top = l.top;
  var left = l.left;
  lemming_die(l);

  if (sounds != 0) playsound('explode');
  if (num_firework < 10) firework(top+24,left+16)

  // make a nice hole
  makehole('exploder', top+4, left);

  // unblock blocker
  var row = top / 2;
  var col = left / 2;
  for (var j = 0; j < 14 && row + j < 160; j++) {
    if (level[row+j][col+2] >= 10) level[row+j][col+2] -= 10;
    if (level[row+j][col+13] >= 20) level[row+j][col+13] -= 20;
  }

  // fallback for slow machines
  if (lemmings_out == 0 && num_lemmings == 0) setTimeout('game_over()', 10000);

}

function lemming_home(l) {

  lemming_die(l);
  lemmings_home++;
  document.getElementById('home').firstChild.nodeValue = 'Home: '+lemmings_home;

}

function lemming_die(l) {

  l.remove();
  lemmings_out--;
  document.getElementById('out').firstChild.nodeValue = 'Out: '+lemmings_out;

}

function firework(y,x) {

  num_firework++;
  var i = fireworks.length;
  var colors = ['#ffffff','#ffff00','#00ff00','#ff0000','#0000ff','#ff00ff','#00ffff'];
  fireworks[i] = [];
  var j = 10, f, a, s;

  do {

    f = document.createElement('div');
    f.className = 'spark';
    f.style.backgroundColor = colors[Math.floor(Math.random()*7)];
    f.style.top = y+'px';
    f.style.left = x+'px';
    f.y = y;
    f.x = x;
    a = Math.random() * 6.294;
    s = (Math.random() >.6) ? 4 : Math.random() * 4;
    f.dx = s * Math.sin(a);
    f.dy = s * Math.cos(a) - 4;

    playground.appendChild(f);
    fireworks[i][j] = f;

  } while (--j)

  setTimeout('firework_ani('+i+')',10);

}

function firework_ani(i) {

  var bla = 0;

  if (paused == 0) {

    var j = 10, f;
    do {

      if (fireworks[i][j]) {

        f = fireworks[i][j];
        f.y += f.dy += 0.18;
        f.x += f.dx;

        if (f.y < 0 || f.y > 319) {

          playground.removeChild(f);
          delete fireworks[i][j];

        } else {

          bla = 1;
          f.style.top = f.y + 'px';
          f.style.left = f.x + 'px';

        }

      }

    } while (--j);

  }

  if (bla != 0 || paused != 0) {
    setTimeout('firework_ani('+i+')', ani_speed);
  } else {
    delete fireworks[i];
    num_firework--;
  }

}

function makestep(top, left) {

  var s = document.createElement('div');
  s.className = 'step';
  s.style.top = top+'px';
  s.style.left = left+'px';
  playground.appendChild(s);

  var row = top / 2;
  var col = left / 2;
  level[row][col++] = 1;
  level[row][col++] = 1;
  level[row][col++] = 1;
  level[row][col++] = 1;
  level[row][col++] = 1;
  level[row][col++] = 1;

}

function makehole(which, top, left) {

  var h = document.createElement('img');
  h.className = 'hole';
  h.style.top = top+'px';
  h.style.left = left+'px';
  h.src = '../img/hole_'+which+'.gif';
  if (which == 'exploder') h.style.height = '44px'
  playground.appendChild(h);

  var row = top / 2;
  var col = left / 2;
  var hole = holes[which];
  for (var j = 0; j < hole.length && row+hole[j][0] < 160; j++) {
    if (lemming_do['hole'][level[row+hole[j][0]][col+hole[j][1]]] != 0) level[row+hole[j][0]][col+hole[j][1]] -= (level[row+hole[j][0]][col+hole[j][1]] % 10);
  }

}