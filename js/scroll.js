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

function init_scroll() {

  selectedscrollbar = false;
  var left = 320 + level_start;
  leftspace = 1600 - grid_width;
  scrollerleft = Math.round((leftspace + level_start) / (2560/592) ) + 16;

  doscroll(scrollerleft);

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
  if (!scrolling) scrolling = setTimeout('dobuttonscroll('+num+')', 500);
  else scrolling = setTimeout('dobuttonscroll('+num+')', 40);

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
  if (scrolling == null) scrolling = setTimeout('doclickscroll()', 500);
  else scrolling = setTimeout('doclickscroll()', 40);

}