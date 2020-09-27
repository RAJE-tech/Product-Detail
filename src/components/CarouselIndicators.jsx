import React from 'react';

function CarouselIndicators({ items, activeIndex, onClickHandler }) {
  return (
    <div className="carousel-indicators">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickHandler(index)}
            className="ajs-carousel-indicator"
          >
            <img src={item.src}/>
            <li
              className={activeIndex === index ? 'active' : ''}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CarouselIndicators;
