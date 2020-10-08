import React, {useEffect} from 'react'
import { shallow } from 'enzyme';
import ProductOverview from '../src/components/ProductOverview.jsx';
import Features from '../src/components/Features.jsx';
import dummyData from './dummyStyle.js';

const dummyFeatures = [
  {
      "feature": "Lenses",
      "value": "Ultrasheen"
  },
  {
      "feature": "UV Protection",
      "value": "null"
  },
  {
      "feature": "Frames",
      "value": "LightCompose"
  }
]

describe('features', () => {
  test('product Overview contains the features component', () => {
    let wrapper = shallow(<ProductOverview product={{features: []}}/>);
    expect(wrapper.find(Features).length).toEqual(1);
  })
  test('features conains all the features', () => {
    let wrapper = shallow(<Features features={dummyFeatures} />);
    let features = wrapper.find('.ajs-feature');
    for (let i = 0; i < features.length; i++) {
      expect(features.at(i).find('div').at(0).text()).toEqual(dummyFeatures[i].feature + ':' + dummyFeatures[i].value)
    }
  })
})