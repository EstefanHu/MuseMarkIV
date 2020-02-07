'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    console.log('hello world');
  }

  function reroute(route) {
    console.log(route);
  }

  window.reroute = reroute;
})();