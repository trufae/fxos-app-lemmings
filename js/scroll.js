/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var Y,X;
var selectedscrollbar = false;
var scrollerleft;
var actualleft;
var orgleft;
var leftspace;
var scrolling = null;
var down = 0;
var orgpaused = 0;
var game_zoom = 1;
var game_left = 0;
var game_top = 0;
var gesture_mode = '';
var gesture_distance = 0;
var gesture_zoom = 1;
var gesture_x = 0;
var gesture_y = 0;
var gesture_moved = false;

function init_scroll() {

  selectedscrollbar = false;
  var left = 320 + level_start;
  leftspace = 1600 - grid_width;
  scrollerleft = Math.round((leftspace + level_start) / (2560/592) ) + 16;

  doscroll(scrollerleft);
  init_gestures();

  document.onmousemove = scrollen;
  document.onmouseup = stopscroll;
  document.getElementById('scrollbar').onmousedown = clickscroll;
  document.getElementById('scroller').onmousedown = startscroll;
  document.getElementById('scroller').ondragstart = cancelEvent;
  document.getElementById('scrollLeft').onmousedown = function(e) {
    if (!e) e = event;
    if (leftClick(e) == false) return cancelEvent(e);
    down = 1;
    this.src = '../img/scroll_left_sel.gif';
    buttonscroll(-4);
    // stop propagation
    cancelPropagation(e);
    return true;
  }
  document.getElementById('scrollLeft').onmouseup = function(e) {
    if (leftClick(e) == false) return cancelEvent(e);
    if (down == 1) {
      down = 0;
      this.src = '../img/scroll_left.gif';
    } else {
      buttonscroll(-4);
    }
    return true;
  }
  document.getElementById('scrollRight').onmousedown = function(e) {
    if (!e) e = event;
    if (leftClick(e) == false) return cancelEvent(e);
    down=1;
    this.src='../img/scroll_right_sel.gif';
    buttonscroll(4);
    // stop propagation
    cancelPropagation(e);
    return true;
  }
  document.getElementById('scrollRight').onmouseup = function(e) {
    if (leftClick(e) == false) return cancelEvent(e);
    if (down == 1) {
      down = 0;
      this.src = '../img/scroll_right.gif';
    } else {
      buttonscroll(4);
    }
    return true;
  }

  document.getElementById('scroller').style.visibility = 'visible';

}

function touch_distance(a, b) {

  var x = a.clientX - b.clientX;
  var y = a.clientY - b.clientY;
  return Math.sqrt(x*x + y*y);

}

function touch_middle(a, b) {

  return {
    x: (a.clientX + b.clientX) / 2,
    y: (a.clientY + b.clientY) / 2
  };

}

function clamp_game_position() {

  var content = document.getElementById('content');
  var minleft = Math.min(0, content.clientWidth - playground.offsetWidth * game_zoom);
  var mintop = Math.min(0, content.clientHeight - playground.offsetHeight * game_zoom);

  game_left = Math.max(minleft, Math.min(0, game_left));
  game_top = Math.max(mintop, Math.min(0, game_top));

}

function draw_game_position() {

  clamp_game_position();
  playground.style.left = game_left+'px';
  playground.style.top = game_top+'px';
  playground.style.webkitTransform = 'scale('+game_zoom+')';
  playground.style.transform = 'scale('+game_zoom+')';

}

function pan_game(x, y) {

  game_left += x;
  game_top += y;
  draw_game_position();

}

function zoom_game(zoom, clientx, clienty) {

  var content = document.getElementById('content');
  var bounds = content.getBoundingClientRect();
  var x = clientx - bounds.left;
  var y = clienty - bounds.top;
  var oldzoom = game_zoom;

  game_zoom = Math.max(1, Math.min(4, zoom));
  game_left = x - (x - game_left) * game_zoom / oldzoom;
  game_top = y - (y - game_top) * game_zoom / oldzoom;
  draw_game_position();

}

function gesture_touchstart(e) {

  if (e.touches.length >= 2) {
    gesture_mode = 'pinch';
    gesture_distance = touch_distance(e.touches[0], e.touches[1]);
    gesture_zoom = game_zoom;
    gesture_moved = true;
  } else if (e.touches.length == 1) {
    gesture_mode = 'pan';
    gesture_x = e.touches[0].clientX;
    gesture_y = e.touches[0].clientY;
    gesture_moved = false;
  }

}

function gesture_touchmove(e) {

  if (e.touches.length >= 2 && gesture_distance > 0) {
    var middle = touch_middle(e.touches[0], e.touches[1]);
    var distance = touch_distance(e.touches[0], e.touches[1]);
    zoom_game(gesture_zoom * distance / gesture_distance, middle.x, middle.y);
    gesture_mode = 'pinch';
    gesture_moved = true;
    e.preventDefault();
  } else if (e.touches.length == 1 && gesture_mode == 'pan') {
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    var dx = x - gesture_x;
    var dy = y - gesture_y;

    if (gesture_moved || Math.abs(dx) + Math.abs(dy) > 4) {
      pan_game(dx, dy);
      gesture_moved = true;
      e.preventDefault();
    }
    gesture_x = x;
    gesture_y = y;
  }

}

function gesture_touchend(e) {

  if (e.touches.length == 1) {
    gesture_mode = 'pan';
    gesture_x = e.touches[0].clientX;
    gesture_y = e.touches[0].clientY;
  } else {
    gesture_mode = '';
  }

  if (gesture_moved) e.preventDefault();

}

function gesture_wheel(e) {

  if (e.ctrlKey || e.metaKey) {
    zoom_game(game_zoom * Math.exp(-e.deltaY * 0.01), e.clientX, e.clientY);
  } else {
    var content = document.getElementById('content');
    var x = -e.deltaX;
    var y = -e.deltaY;

    if (playground.offsetHeight * game_zoom <= content.clientHeight && Math.abs(x) < Math.abs(y)) {
      x = y;
      y = 0;
    }
    pan_game(x, y);
  }
  e.preventDefault();

}

function gesture_start(e) {

  gesture_zoom = game_zoom;
  e.preventDefault();

}

function gesture_change(e) {

  zoom_game(gesture_zoom * e.scale, e.clientX, e.clientY);
  e.preventDefault();

}

function init_gestures() {

  var content = document.getElementById('content');

  game_left = parseFloat(playground.style.left) || 0;
  game_top = parseFloat(playground.style.top) || 0;
  playground.style.webkitTransformOrigin = '0 0';
  playground.style.transformOrigin = '0 0';

  content.addEventListener('touchstart', gesture_touchstart, {passive:false});
  content.addEventListener('touchmove', gesture_touchmove, {passive:false});
  content.addEventListener('touchend', gesture_touchend, {passive:false});
  content.addEventListener('touchcancel', gesture_touchend, {passive:false});
  content.addEventListener('wheel', gesture_wheel, {passive:false});
  content.addEventListener('gesturestart', gesture_start, {passive:false});
  content.addEventListener('gesturechange', gesture_change, {passive:false});
  window.addEventListener('resize', draw_game_position);
  content.addEventListener('dblclick', function(e) {
    zoom_game(game_zoom < 2 ? 2 : 1, e.clientX, e.clientY);
    e.preventDefault();
  });

}

function scrollen(e) {

  if (selectedscrollbar == true) {

    if (!e) e = event;

    if (leftClick(e) == true) {

      scrollerleft += e.clientX - X;
      X = e.clientX;

      if (Math.abs(e.clientY - Y) < 40 && scrollerleft >= -16 && scrollerleft <= 640) {

        doscroll(scrollerleft);

      } else {

        doscroll(orgleft);

      }

    } else {

      stopscroll();

    }

  }

  return true;

}

function startscroll(e) {

  if (!e) e = event;

  X = e.clientX;
  Y = e.clientY;

  if (leftClick(e) == true) {

    orgleft = scrollerleft;
    selectedscrollbar = true;

    // force pausemode
    if (paused == 0 && animations == 1) stop_animations();
    orgpaused = paused;
    paused = 1;

  }

  // stop propagation and cancel event
  cancelPropagation(e);
  return cancelEvent(e);

}

function doscroll(left) {

  actualleft = left;

  if (left < 16)  actualleft = 16;
  if (left > 608) actualleft = 608;

  var contentleft = Math.round(leftspace - ((actualleft - 16) * (2560/592)));
//  window.status=contentleft;
  document.getElementById('scroller').style.left = actualleft+'px';
  playground.style.left = contentleft+'px';

}

function stopscroll() {

 if (selectedscrollbar == true || scrolling != null) {

    // reset pausemode
    if (orgpaused == 0 && animations == 1) start_animations();
    paused = orgpaused;
    orgpaused = 0;

    selectedscrollbar = false;
    if (scrolling != null) { 
      clearTimeout(scrolling);
      scrolling = null;
    }
    scrollerleft = actualleft;
    document.getElementById('scrollbg').style.visibility='hidden';

  }

}

function buttonscroll(num) {

  // force pausemode
  if (paused == 0 && animations == 1) stop_animations();
  orgpaused = paused;
  paused = 1;

  dobuttonscroll(num);

}

function dobuttonscroll(num) {

  scrollerleft += num;
  doscroll(scrollerleft);
  scrolling = setTimeout(function () {
    dobuttonscroll(num);
  }, scrolling ? 40 : 500);

  return false;

}

function clickscroll(e) {

  if (!e) e = event;

  if (leftClick(e) == false) return cancelEvent(e);

  X = e.offsetX || e.layerX || 0;

  // force pausemode
  if (paused == 0 && animations == 1) stop_animations();
  orgpaused = paused;
  paused = 1;

  doclickscroll();
  return true;

}

function doclickscroll() {

  if (X < scrollerleft) {

    document.getElementById('scrollbg').style.left = '16px';
    document.getElementById('scrollbg').style.width = scrollerleft-16+'px';
    document.getElementById('scrollbg').style.visibility='visible';
    scrollerleft -= 16;
    if (X >= scrollerleft+16) {
      stopscroll();
      return;
    }

  } else {

    document.getElementById('scrollbg').style.left = scrollerleft+16+'px';
    document.getElementById('scrollbg').style.width = 608-scrollerleft+'px';
    document.getElementById('scrollbg').style.visibility='visible';
    scrollerleft += 16;
    if (X <= scrollerleft) {
      stopscroll();
      return;
    }

  }

  doscroll(scrollerleft);
  scrolling = setTimeout(doclickscroll, scrolling == null ? 500 : 40);

}
