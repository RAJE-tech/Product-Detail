import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddButton from './AddButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import SelectSize from './SelectSize.jsx';

function AddToCart({ selectedStyle, productId }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectSizeOpen, setSelectSizeOpen] = useState(false);
  const [selectSizeAlert, setSelectSizeAlert] = useState(false);

  const sessionId = 5;

  const addToCart = () => {
    axios.post('http://52.26.193.201:3000/cart', {
      user_session: sessionId,
      product_id: productId,
    });
  };
  const handleSelectSize = () => {
    setSelectSizeOpen(true);
    setSelectSizeAlert(true);
  };

  return (
    <div className="ajs-add-to-cart">
      {(selectSizeAlert === true ? <div className="select-size-alert">Please select a size.</div> : <div />)}
      <div className="row">
        <div className="col-sm-8 col-12 ajs-add-to-cart-first-row">
          <SelectSize
            skus={selectedStyle.skus}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
            selectSizeOpen={selectSizeOpen}
            setSelectSizeOpen={setSelectSizeOpen}
            selectSizeAlert={selectSizeAlert}
            setSelectSizeAlert={setSelectSizeAlert}
          />
        </div>
        <div className="col-sm-4 col-12 ajs-add-to-cart-first-row">
          <QuantitySelector
            selectedQuantity={selectedQuantity}
            availableQuantity={selectedStyle.skus[selectedSize]}
            setSelectedQuantity={setSelectedQuantity}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <AddButton
            selectedSize={selectedSize}
            addToCart={addToCart}
            handleSelectSize={handleSelectSize}
            skus={selectedStyle.skus}
          />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
