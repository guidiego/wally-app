import React from 'react';

import HomePage from 'pages';
import { shallow } from 'enzyme';

test('should return the component', () => {
  const wrap = shallow(<HomePage />)

  expect(wrap.text()).toBe('Morphine Coroi')
})
