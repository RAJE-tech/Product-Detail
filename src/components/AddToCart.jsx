import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';

function AddToCart({ selectedStyle }) {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className ="ajs-add-to-cart">
      <div className="row">
        <div className="col-9">
          <SelectSize skus={selectedStyle.skus} setSelectedSize={setSelectedSize} />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
