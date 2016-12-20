import React from 'react';

import IndexPage from 'pages/index';
import { Page, Users } from 'containers';
import { shallow } from 'enzyme';

test('should return the component', () => {
  const wrap = shallow(<IndexPage />)

    expect(wrap).toContainReact(
        <Page>
            <span> Index </span>
        </Page>
    )
})
