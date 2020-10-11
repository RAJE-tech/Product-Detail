import React from 'react';
import { Fragment } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import Magnifier from 'react-magnifier';
import Media from 'react-media';

function ZoomOption({ carouselExpanded, setCarouselExpanded, src}) {
  if (src === null) {
    return <img className="ajs-small-image ajs-not-available" alt="not available" src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_900/https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
  }
  if (carouselExpanded) {
    return (
      <div className="ajs-zoom-container">
        <button type="button" className="ajs-expand-btn" onClick={() => setCarouselExpanded(!carouselExpanded)}>
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-fullscreen-exit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
          </svg>
        </button>
        <InnerImageZoom fullscreenOnMobile src={src} />
      </div>
    );
  }
  return (
    <div>
      <Media queries={{
        mobile: "(max-width: 576px)",
        computer: "(min-width: 577px)",
      }}>
        {matches => (
          <Fragment>
            {matches.mobile && <Magnifier src={src} mgHeight={200} mgWidth={200}/>}
            {matches.computer && <img className="ajs-small-image" onClick={() => setCarouselExpanded(!carouselExpanded)} src={src} />}
          </Fragment>
        )}
      </Media>
    </div>
    // <Media queries={
    //   {
    //     mobile:'(max-width: 576px)',
    //     computer: '(min-width: 577px)',
    //   }
    // }
    // >
    //   <Fragment>
    //     {matches.mobile && <Magnifier src={src} mgHeight={200} mgWidth={200}/>}
    //     {matches.computer && <img className="ajs-small-image" onClick={() => setCarouselExpanded(!carouselExpanded)} src={src} />}
    //   </Fragment>
    // </Media>
  )
}

export default ZoomOption;