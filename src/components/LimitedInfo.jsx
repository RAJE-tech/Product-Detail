import React from 'react';

function LimitedInfo({ product, styles, styleIndex }) {
  const price = styles[styleIndex].sale_price !== '0' ? styles[styleIndex].sale_price: styles[styleIndex].original_price
  return (
    <div>
      {product.category.toUpperCase()}
      <h2 className="ajs-product-name">Expanded Product Name</h2>
      <p>
        ${price}
      </p>
    </div>
  );
}

export default LimitedInfo;
