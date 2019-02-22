'use strict';

const COOKIE_NAME = 'lastState';

const save = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const get = function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const getStateFromCookies = function() {
  return get(COOKIE_NAME);
}

const setStateInCookies = function(url, pagesFastAccess) {

  var state = url.indexOf('?q=') != -1 ?
              url.substr(url.indexOf('?q=')) :
              url.substr(url.indexOf('?page='));


  state = state + '&fastBtns=' +pagesFastAccess.join(',');
  save(COOKIE_NAME, state, 1);
}

const getPageFromState = function() {

  var state = getStateFromCookies();
  var result = state.substring(state.indexOf('page=') + 5, state.indexOf('&count'))

  return parseInt(result, 0);
}

const getQueryFromState = function() {

  var state = getStateFromCookies();
  var query = "";

  if (state.indexOf('q=') > -1) {
    query = state.substring(state.indexOf('q=') + 2, state.indexOf('&'))
  }

  return query;
}

const getFastButtonsFromState = function() {
  var state = getStateFromCookies();

  var str = state.substr(state.indexOf("&fastBtns=") + ("&fastBtns=").length );
  var arr = str.split(",").map(Number);

  return arr || [];
}



export {setStateInCookies,
        getStateFromCookies,
        getPageFromState,
        getQueryFromState,
        getFastButtonsFromState };