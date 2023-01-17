import React from 'react';
import { urlFor } from '../lib/client';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { motion } from 'framer-motion';
const Slide = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 330;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 330;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideRight}
      />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index}>
              <img
                src={urlFor(slide.image)}
                layout="fill"
                className="slider-card-image w-10 "
              />

              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <p className="slider-card-title">{slide.title}</p>

                <div>
                  <motion.button whileTap={{ scale: 1.5 }}>
                    <a
                      href={slide.description}
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#5181e0]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-blue
                     transition
                     "
                    >
                      詳しく見る
                    </a>
                  </motion.button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideLeft}
      />
    </div>
  );
};
export default Slide;
