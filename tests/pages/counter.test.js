import React from 'react';

import CounterPage from 'pages/counter';
import { Page, Counter } from 'containers';
import { shallow } from 'enzyme';

test('should return the component', () => {
  const wrap = shallow(<CounterPage />)

  expect(wrap).toContainReact(
    <Page title='Counter Example'>
      <Counter />
    </Page>
  )
})
