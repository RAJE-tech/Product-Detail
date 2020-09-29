import React from 'react';
import { Button } from 'reactstrap';

function AddButton({ addToCart, selectedSize, handleSelectSize}) {
  let clickHandler;
  if (selectedSize === null) {
    clickHandler = handleSelectSize;
  } else {
    clickHandler = addToCart;
  }
  return (
    <Button onClick={clickHandler}>
      <div>
        ADD TO BAG
      </div>
      <div>+</div>
    </Button>
  );
}

export default AddButton;
