import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';
import React from 'react';
import Review from './Review.jsx';
import LimitedInfo from './LimitedInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function CustomerInteraction({
  product,
  styles,
  styleIndex,
  setStyleIndex,
  ratings,
  productId
}) {
  return (
    <div className="ajs-customer-interaction-container">
      <Review ratings={ratings} />
      <div className="row">
        <FacebookShareButton className="col-4 col-md-3" url="http://localhost/3000">
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton className="col-4 col-md-3" url="http://localhost/3000">
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        <PinterestShareButton className="col-4 col-md-3" url="http://localhost/3000">
          <PinterestIcon size={50} round />
        </PinterestShareButton>
      </div>
      <LimitedInfo
        product={product}
        styles={styles}
        styleIndex={styleIndex}
      />
      <StyleSelector
        styleIndex={styleIndex}
        setStyleIndex={setStyleIndex}
        styles={styles}
      />
      <AddToCart productId={productId} selectedStyle={styles[styleIndex]} />
    </div>
  );
}

export default CustomerInteraction;
