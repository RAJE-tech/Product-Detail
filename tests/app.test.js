import React from 'react'
import { shallow } from 'enzyme'
import dummyData from './dummyStyle.js'
import axios from 'axios';
import App from '../src/components/App.jsx'
jest.mock('axios');

describe('Carousel Displays pictures for a style', () => {
  axios.get.mockResolvedValue({
    data: dummyData
  })
  

  
  test('sets the state of the style after a get request', () => {
    const app = shallow(<App />)
    let CarouselContainer = app.find('CarouselContainer')
    expect(CarouselContainer.prop('photos')).toEqual(dummyData.results[1].photos)
    }
  )
})
