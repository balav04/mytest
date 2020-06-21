import React from 'react';
import { render } from '@testing-library/react';
import * as enzyme from 'enzyme';
import Home from './Home';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import SearchBar from './SearchBar';
import ReactDOM from 'react-dom';

it('Home renders without crashing', () => {
   const wrapper = enzyme.shallow(<Home />)
});
it('search button click event', () => {
    const mockCallBack = jest.fn();

    const button = enzyme.shallow((<SearchBar updateData = {mockCallBack}>Search</SearchBar>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });