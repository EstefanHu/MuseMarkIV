'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(res => renderTrending(res))
      .catch(console.error);
  }

  function renderTrending(res) {
    console.log(res);
  }

  function submit(e) {
    e.preventDefault();
    console.log(e)
  }

  window.submit = submit;
})();