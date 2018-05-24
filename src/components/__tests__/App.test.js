import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    let component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });
});


