import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CarouselIndicators({ items, activeIndex, onClickHandler }) {
  return (
    <div className="container ajs-indicator-container">
      <Carousel containerClass={items.length < 7 ? 'react-mutli-carousel-list ajs-center-indicators' : 'react-mutli-carousel-list'} responsive={responsive}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => onClickHandler(index)}
              className="ajs-carousel-indicator"
            >
              {item.src === null ? <img src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_900/https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/> : <img src={item.src}/>}
              <span
              className={activeIndex === index ? 'active ajs-indicator-highlight' : 'ajs-indicator-highlight'}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselIndicators;
