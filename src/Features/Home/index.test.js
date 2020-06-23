import React from 'react';
import { render } from '@testing-library/react';
import * as enzyme from 'enzyme';
import Home from './index';

it('Home renders without crashing', () => {
   const wrapper = enzyme.shallow(<Home />)
});