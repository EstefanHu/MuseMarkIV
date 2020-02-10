import React, { useEffect } from 'react';

import Carousel from './carousel';

const Hero = () => {
  useEffect(() => {
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
  }, []);

  return (
    <section id='hero'>
      <button className='carousel_button isHidden' id='carousel_button--left'>
        <img src='../img/back.png' alt='' />
      </button>
      <Carousel />
      <button className='carousel_button' id='carousel_button--right'>
        <img src='../img/next.png' alt='' />  
      </button>
      <div id='carousel_nav'>
        <button className="carousel_indicator current_slide"></button>
        <button className="carousel_indicator"></button>
        <button className="carousel_indicator"></button>
      </div>
    </section>
  )
}



export default Hero;