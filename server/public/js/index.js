'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(res => renderTrending(res))
      .catch(console.error);
    document.getElementById('read_publishing').addEventListener('click', e => {
      console.log('hello from publishing');
    });
    document.getElementById('join_beta').addEventListener('click', e => {
      window.location.href = "join.html";
    });
    carousel();
  }

  function renderTrending(res) {
    console.log(res);
  }

  function carousel() {
    const track = document.getElementById('carousel_track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('carousel_button--right');
    const prevButton = document.getElementById('carousel_button--left');
    const dotsNav = document.getElementById('carousel_nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition);

    prevButton.addEventListener('click', () => {
      const currSlide = track.querySelector('.current_slide');
      const prevSlide = currSlide.previousElementSibling;
      moveToSlide (track, currSlide, prevSlide);

      const currentDot = dotsNav.querySelector('.current_slide');
      const nextDot = currentDot.previousElementSibling;
      updateDots(currentDot, nextDot);

      const nextIndex = slides.findIndex(slide => slide === prevSlide);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);
    })

    nextButton.addEventListener('click', () => {
      const currSlide = track.querySelector('.current_slide');
      const nextSlide = currSlide.nextElementSibling;
      moveToSlide(track, currSlide, nextSlide);

      const currentDot = dotsNav.querySelector('.current_slide');
      const nextDot = currentDot.nextElementSibling;
      updateDots(currentDot, nextDot);

      const nextIndex = slides.findIndex(slide => slide === nextSlide);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button');
      if (!targetDot) return;
      const currSlide = track.querySelector('.current_slide');
      const currentDot = dotsNav.querySelector('.current_slide');
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currSlide, targetSlide);
      updateDots(currentDot, targetDot);
      hideShowArrows(slides, prevButton, nextButton, targetIndex);
    });
  }

  const updateDots = (currDot, targetDot) => {
    currDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
  }

  const moveToSlide = (track, currSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
  }

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add('isHidden');
      nextButton.classList.remove('isHidden');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('isHidden');
      nextButton.classList.add('isHidden');
    } else {
      prevButton.classList.remove('isHidden');
      nextButton.classList.remove('isHidden');
    }
  }

  
})();