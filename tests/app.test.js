import React, {useEffect} from 'react'
import { shallow } from 'enzyme'
import dummyData from './dummyStyle.js'
import axios from 'axios';
import App from '../src/components/App.jsx'

jest.mock('axios');
jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

describe('test', () => {
  axios.get.mockResolvedValue({
    data: dummyData
  })
  
  beforeEach(()=> {
    let app = shallow(<App />, {disableLifecycleMethods: true})
  })
  
  test('this is a test', () => {
    
    const didMount = app.instance().componentDidMount()
    let CarouselContainer = app.find('CarouselContainer')
    expect(CarouselContainer.prop('photos')).toEqual(dummyData.results[1].photos)
    }
  )
})
