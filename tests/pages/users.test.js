import React from 'react';

import UsersPage from 'pages/users';
import { Page, Users } from 'containers';
import { shallow } from 'enzyme';

test('should return the component', () => {
  const wrap = shallow(<UsersPage />)

  expect(wrap).toContainReact(
    <Page title='Fetching List Example'>
        <Users />
    </Page>
  )
})
