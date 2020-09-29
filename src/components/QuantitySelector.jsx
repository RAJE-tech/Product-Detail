import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';

function QuantitySelector({ availableQuantity, selectedQuantity, setSelectedQuantity }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let quantityArray = [];
  for (let i = 1; i <= (availableQuantity < 15 ? availableQuantity : 15); i++) {
    quantityArray.push(i);
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);
  if (availableQuantity === undefined) {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle disabled>
          -
        </DropdownToggle>
      </Dropdown>
    );
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {selectedQuantity}
      </DropdownToggle>
      <DropdownMenu>
        {quantityArray.map((quantity) => <DropdownItem onClick={() => setSelectedQuantity(quantity)} key={quantity}>{quantity}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
}
export default QuantitySelector;
