import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders correctly', () => {
    expect(component.exists()).toEqual(true);
  });

  it('shows an add button', () => {
    expect(component.find('AddButton').length).toEqual(1);
  });

  it('shows a home button', () => {
    expect(component.find('HomeButton').length).toEqual(1);
  });
});
