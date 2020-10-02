import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import CarouselIndicators from './CarouselIndicators.jsx';
import ZoomOption from './ZoomOption.jsx'

const CarouselContainer = ({ photos, carouselExpanded, setCarouselExpanded }) => {
  const items = [];
  const thumbnails = [];
  for (let i = 0; i < photos.length; i++) {
    items.push({ src: photos[i].url });
    thumbnails.push({ src: photos[i].thumbnail_url, });
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <ZoomOption
          src={item.src}
          carouselExpanded={carouselExpanded}
          setCarouselExpanded={setCarouselExpanded}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="ajs-carousel-container">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators
          items={thumbnails}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          className={activeIndex === 0 ? 'ajs-hidden' : ''}
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className={activeIndex === items.length - 1 ? 'ajs-hidden' : ''}
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
