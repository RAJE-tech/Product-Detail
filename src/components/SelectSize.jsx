import React, { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';

function SelectSize({ skus, setSelectedSize }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  if (skus.null !== undefined) {
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
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        {Object.keys(skus).map((size) => <DropdownItem onClick={() => setSelectedSize(size)} key={size}>{size}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
}
export default SelectSize;
