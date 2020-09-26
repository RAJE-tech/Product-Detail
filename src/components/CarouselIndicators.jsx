import React from 'react';

function CarouselIndicators({ items, activeIndex, onClickHandler }) {
  return (
    <ol className="carousel-indicators ajs-carouselindicator">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickHandler(index)}
          >
            <img src={item.src}/>
            <li
              className={activeIndex === index ? 'active' : ''}
            />
          </div>
        );
      })}
    </ol>
  );
}

export default CarouselIndicators;
