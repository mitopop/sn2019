import React from 'react';
import { shallow } from 'enzyme';
import ArrowPanel from '../containers/ArrowPanel';
import ArrowUp from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

describe('ArrowPanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArrowPanel/>);
  });

  it('renders ArrowUp or ArrowDown', () => {
    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.type()).toBe(ArrowDown);

    wrapper.setState({ isOpen: true });
    expect(wrapper.type()).toBe(ArrowUp);
  });
});
