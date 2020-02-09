'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(res => renderTrending(res))
      .catch(console.error);

    carousel();
  }

  function renderTrending(res) {
    console.log(res);
  }

  function carousel() {
    const track = document.getElementById('carousel_track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('carousel_button--right');
    console.log(nextButton)
    const prevButton = document.getElementById('carousel_button--left');
    const dotsNav = document.getElementById('carousel_nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // slides[0].style.left = slideWidth * 0 + 'px';
    // slides[1].style.left = slideWidth * 1 + 'px';
    // slides[2].style.left = slideWidth * 2 + 'px';

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition);

    nextButton.addEventListener('click', e => {
      const currSlide = track.querySelector('.current_slide');
      const nextSlide = currSlide.nextElementSibling;
    });

  }

  

  
})();