import React, { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

function SelectSize({ skus, setSelectedSize, selectedSize, setSelectSizeOpen, selectSizeOpen }) {
  const toggle = () => setSelectSizeOpen(prevState => !prevState);
  if (skus.null !== undefined) {
    return (
      <Dropdown isOpen={selectSizeOpen} toggle={toggle}>
        <DropdownToggle disabled>
          OUT OF STOCK
        </DropdownToggle>
      </Dropdown>
    );
  }
  return (
    <Dropdown isOpen={selectSizeOpen} toggle={toggle}>
      <DropdownToggle caret>
        {selectedSize === null ? 'SELECT SIZE' : selectedSize}
      </DropdownToggle>
      <DropdownMenu>
        {Object.keys(skus).map((size) => <DropdownItem onClick={() => setSelectedSize(size)} key={size}>{size}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
}
export default SelectSize;
