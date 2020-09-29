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
