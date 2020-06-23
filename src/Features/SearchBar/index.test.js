import React from 'react';
import { render } from '@testing-library/react';
import * as enzyme from 'enzyme';
import SearchBar from './index';

it('searchbar renders without crashing', () => {
   const wrapper = enzyme.shallow(<SearchBar />)
});
it('search button click event', () => {
    const mockCallBack = jest.fn();
    const button = enzyme.shallow((<SearchBar updateData = {mockCallBack}>Search</SearchBar>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });