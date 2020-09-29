import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddButton from './AddButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import SelectSize from './SelectSize.jsx';

function AddToCart({ selectedStyle, productId }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const sessionId = 5;

  const addToCart = () => {
    axios.post('http://52.26.193.201:3000/cart', {
      user_session: sessionId,
      product_id: productId,
    });
  };

  return (
    <div className="ajs-add-to-cart">
      <div className="row">
        <div className="col-8">
          <SelectSize
            skus={selectedStyle.skus}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
        </div>
        <div className="col-4">
          <QuantitySelector
            selectedQuantity={selectedQuantity}
            availableQuantity={selectedStyle.skus[selectedSize]}
            setSelectedQuantity={setSelectedQuantity}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <AddButton selectedSize={selectedSize} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
