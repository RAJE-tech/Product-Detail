import React, {useEffect} from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import dummyData from './dummyStyle.js'
import StyleSelector from '../src/components/StyleSelector.jsx'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Review from '../src/components/Review.jsx'
import Rating from '@material-ui/lab/Rating'
import AddToCart from '../src/components/AddToCart.jsx'
import SelectSize from '../src/components/SelectSize.jsx'
import { DropdownItem, DropdownToggle, Button } from 'reactstrap'
import QuantitySelector from '../src/components/QuantitySelector.jsx'
import AddButton from '../src/components/AddButton.jsx'

describe('StyleSelector', () => {

  const setStyleIndex = jest.fn()
  let wrapper, avatars, badges;
  beforeEach(() => {
    wrapper = shallow(<StyleSelector styles={dummyData.results} styleIndex={0} setStyleIndex={setStyleIndex}/>)
    avatars = wrapper.find(Avatar)
    badges = wrapper.find(Badge)
  })

  test('it renders a style button for each style', () => {
    expect(wrapper.find('.ajs-style-btn').length).toEqual(6)
  })
  test('it renders an Avatar component within each style button', () => {
    expect(wrapper.find(Avatar).length).toEqual(6)
  })
  test('it renders a Badge component which holds an Avatar component within each style button', () => {
    expect(badges.find(Avatar).length).toEqual(6)
  })
  test('it selects the right image for each style btn', () => {
    for(let i = 0; i < avatars.length; i++) {
      expect(avatars.at(i).prop('src')).toEqual(dummyData.results[i].photos[0].thumbnail_url)
    }
  })

  test('the checkmark initializes over the first selector btn and no other buttons', () => {
    expect(badges.first().prop('invisible')).toEqual(false);
    for(let i = 1; i < badges.length; i++) {
      expect(badges.at(i).prop('invisible')).toEqual(true);
    }
  })

  test('the component calls set state with the index of the new style', () => {
    avatars.at(1).simulate('click')
    expect(setStyleIndex.mock.calls[0][0]).toEqual(1)
  })

  test('the check button moves to the new selector btn if the user clicks that button', () => {
    wrapper = shallow(<StyleSelector styles={dummyData.results} styleIndex={1} setStyleIndex={setStyleIndex}/>)
    badges = wrapper.find(Badge)
    expect(badges.at(1).prop('invisible')).toEqual(false)
  })
})

describe('review', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Review 
      ratings={{
        "1": 12,
        "2": 3,
        "3": 8,
        "4": 8,
        "5": 21
      }}
    />)
  })

  test('component contains material ui Rating', () => {
    expect(wrapper.find(Rating).length).toEqual(1)
  })
  test('rating is the correct number', () => {
    expect(wrapper.find(Rating).prop('value')).toEqual(3.4423076923076925)
  })
  test('there is a link component that says "read all reviews"', () => {
    expect(wrapper.find('a').text()).toEqual('Read all reviews')
  })
  test('if there are no reviews, the entire section should be hidden', () => {
    wrapper = shallow(<Review ratings={{
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }}
    />)
    expect(wrapper.find('div').hasClass('ajs-hidden')).toBeTruthy()
  })
})
describe('add to cart', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddToCart selectedStyle={dummyData.results[0]} />)
  })
  test('contains the Select Size component', () => {
    expect(wrapper.find(SelectSize).length).toEqual(1)
  })
  test('contains the select Quantity component', () => {
    expect(wrapper.find(QuantitySelector).length).toEqual(1)
  })
  test('contains the add to cart btn component', () => {
    expect(wrapper.find(AddButton).length).toEqual(1)
  })
})
describe('Select Size', () => {
  let wrapper;
  const setSelectedSize = jest.fn()

  test('clicking an option in the dropdown sets the size', () => {
    wrapper = shallow(<SelectSize setSelectedSize={setSelectedSize} skus={dummyData.results[0].skus} />)
    wrapper.find(DropdownToggle).simulate('click')
    wrapper.find(DropdownItem).at(0).simulate('click')
    expect(setSelectedSize.mock.calls[0][0]).toEqual(Object.keys(dummyData.results[0].skus)[0])
  })
  // test('if there are no items in stock, the button should ', () => {
  //   wrapper = shallow(<SelectSize
  //     setSelectedSize={setSelectedSize}
  //     skus={{
  //       null: null
  //     }}
  //   />)
  //   let toggle = wrapper.find(DropdownToggle)
  //   expect(toggle.render().text()).toEqual('-')
  //   expect(toggle.prop('disabled')).toBeTruthy
  // })
})
describe('quantity selector', () => {
  let wrapper;
  test('if the size has not been selected, the dropdown is disabled', () => {
    wrapper = shallow(<QuantitySelector availableQuantity={undefined} />)
    let toggle = wrapper.find(DropdownToggle)
    expect(toggle.render().text()).toEqual('-')
    expect(toggle.prop('disabled')).toBeTruthy
  })
  test('the options should include options to select all if the quantity is under 15', () => {
    wrapper = shallow(<QuantitySelector availableQuantity={9} />)
    let dropdownItem = wrapper.find(DropdownItem)
    expect(dropdownItem.length).toEqual(9)
    for (let i = 0; i < dropdownItem.length; i++) {
      expect(Number(dropdownItem.at(i).render().text())).toEqual(i + 1)
    }
  })
  test('the options should only include 15 if the number is greater than 15', () => {
    wrapper = shallow(<QuantitySelector availableQuantity={30} />)
    expect(wrapper.find(DropdownItem).length).toEqual(15)
  })
  test('clicking the dropdown, should set the selected quantity to the right number', () => {
    const setSelectedQuantity = jest.fn();
    wrapper = shallow(<QuantitySelector setSelectedQuantity={setSelectedQuantity} availableQuantity={30} />)
    wrapper.find(DropdownToggle).simulate('click')
    wrapper.find(DropdownItem).at(0).simulate('click')
    expect(setSelectedQuantity.mock.calls[0][0]).toEqual(1)
  })
})
// describe('add button', () => {
//   test('it should call the addToCart function', () => {
//     let addToCart = jest.fn()
//     let wrapper = shallow(<AddButton addToCart={addToCart} />)
//     wrapper.find(Button).simulate('click')
//     expect(addToCart.calls.length).toEqual(1)
//   })
// })
