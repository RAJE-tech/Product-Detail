import React from 'react';

function CarouselIndicators({ items, activeIndex, onClickHandler }) {
  return (
    <div className="ajs-carousel-indicators">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickHandler(index)}
            className="ajs-carousel-indicator"
          >
            <img src={item.src}/>
            <div
              className={activeIndex === index ? 'active' : ''}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CarouselIndicators;
