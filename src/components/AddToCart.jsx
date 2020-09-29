import React, { useEffect, useState } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import SelectSize from './SelectSize.jsx';

function AddToCart({ selectedStyle }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div className="ajs-add-to-cart">
      <div className="row">
        <div className="col-8">
          <SelectSize skus={selectedStyle.skus} setSelectedSize={setSelectedSize} />
        </div>
        <div className="col-4">
          <QuantitySelector
            selectedQuantity={selectedQuantity}
            availableQuantity={selectedStyle.skus[selectedSize]}
            setSelectedQuantity={setSelectedQuantity}
          />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
