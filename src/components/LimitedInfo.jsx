import React from 'react';

function LimitedInfo({ product, styles, styleIndex }) {
  const price = styles[styleIndex].sale_price !== '0' ? styles[styleIndex].sale_price: styles[styleIndex].original_price
  return (
    <div>
      {product.category.toUpperCase()}
      <h2 className="ajs-product-name">{product.name}</h2>
      <div className="ajs-prices">
        {(styles[styleIndex].sale_price !== '0' ? <div className="ajs-struck">${styles[styleIndex].original_price}</div> : <div />)}
        <p className={styles[styleIndex].sale_price !== '0' ? 'ajs-sale' : ''}>
          ${price}
        </p>
      </div>
    </div>
  );
}

export default LimitedInfo;
