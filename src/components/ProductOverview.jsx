import React from 'react';
import Features from './Features.jsx';

function ProductOverview({ product }) {
  return (
    <div className="ajs-product-overview container row no-gutters">
      <div className="ajs-product-description col-12 col-sm-7">
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
      <div className="ajs-vr col-12 col-sm-1" />
      <div className="col-12 col-sm-4">
        <Features features={product.features} />
      </div>
    </div>
  );
}

export default ProductOverview;
