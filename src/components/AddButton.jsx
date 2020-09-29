import React from 'react';
import { Button } from 'reactstrap';

function AddButton({ addToCart }) {
  return (
    <Button onClick={addToCart}>
      <div>
        ADD TO BAG
      </div>
      <div>+</div>
    </Button>
  );
}

export default AddButton;
