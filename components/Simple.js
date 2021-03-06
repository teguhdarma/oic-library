import React from 'react';
import { urlFor } from '../lib/client';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { motion } from 'framer-motion';
const Simple = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
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
                className="slider-card-image"
              />

              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>

                <div>
                  <motion.button whileTap={{ scale: 1.5 }}>
                    <a
                      href={`/category/${slide.title}`}
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
                      View Details
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
export default Simple;
