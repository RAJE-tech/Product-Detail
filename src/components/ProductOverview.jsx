import React from 'react';
import Features from './Features.jsx';

function ProductOverview({ product }) {
  return (
    <div className="ajs-product-overview container row">
      <div className="ajs-product-description col-12 col-sm-8">
        <div>
          <div className="ajs-slogan">
            {product.slogan}
          </div>
          <div>
            {product.description}
          </div>
        </div>
        <div className="ajs-vr-inside" />
      </div>
      <div className="ajs-vr" />
      <div className="col-12 col-sm-4">
        <Features features={product.features} />
      </div>
    </div>
  );
}

export default ProductOverview;
