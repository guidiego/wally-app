import React from 'react';

import FeatureContainer from 'containers/feature/List'

import _ from './HomeView.sass';

export const HomeView = () => (
  <div>
    <div className={_.header}>
      <img src="http://i.imgur.com/iqyCvDP.png" className={_.logo}/>
    </div>
    <section>
      <FeatureContainer />
    </section>
  </div>
);

export default HomeView;
