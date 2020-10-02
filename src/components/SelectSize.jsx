import React, { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

function SelectSize({
  skus,
  setSelectedSize,
  selectedSize,
  setSelectSizeOpen,
  selectSizeOpen,
  selectSizeAlert,
  setSelectSizeAlert,
}) {
  const dropdownClickHandler = (size) => {
    if (selectSizeAlert) {
      setSelectSizeAlert(false);
    }
    setSelectedSize(size);
  }
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
        {Object.keys(skus).map((size, index) => {
          return (
            <div key={size}>
              <DropdownItem className="ajs-dropdown-item" onClick={() => dropdownClickHandler(size)}>{size}</DropdownItem>
              {index !== Object.keys(skus).length - 1 ? <DropdownItem divider /> : <div />}
            </div>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
export default SelectSize;
