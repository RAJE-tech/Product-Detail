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
}) {
  return (
    <div className="ajs-customer-interaction-container">
      <Review />
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
      <AddToCart />
    </div>
  );
}

export default CustomerInteraction;
