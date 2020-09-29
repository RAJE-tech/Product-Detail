import React from 'react';
import { Button } from 'reactstrap';

function AddButton({ addToCart, selectedSize, handleSelectSize, skus }) {
  let clickHandler;
  if (selectedSize === null) {
    clickHandler = handleSelectSize;
  } else {
    clickHandler = addToCart;
  }

  if (skus.null !== undefined) {
    return (
      <div />
    );
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
