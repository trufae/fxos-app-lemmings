/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

// Get elements from string
function getURLParameter(text, identifier) {

  identifier += '=';
  var oleft = text.indexOf(identifier);

  while (oleft != -1 && text.substring(oleft - 1, oleft) != '&' && text.substring(oleft - 1, oleft) != '?') {

    oleft = text.indexOf(identifier, oleft + 1);

  }

  if (oleft != -1) {

    var oright = text.indexOf('&', oleft + 1);
    if (oright == -1) oright = text.length;

    return text.substring(oleft + identifier.length, oright);

  }

  return '';

}


// get contents of a cookie
function getcookie(id) {

  if (document.cookie) {

    var index = document.cookie.indexOf(id);
    if (index != -1) {

      var oleft = (document.cookie.indexOf('=', index) + 1);
      var oright = document.cookie.indexOf(';', index);
      if (oright == -1) {
        oright = document.cookie.length;
      }
      return document.cookie.substring(oleft, oright);
    }

  }

  return '';

}


// set a cookie
function setcookie(id, cookievars) {

  document.cookie = id+'='+cookievars+'; expires=Monday, 04-Apr-2010 05:00:00 GMT';

}