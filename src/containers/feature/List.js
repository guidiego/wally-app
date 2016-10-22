import React from 'react';
import uid from 'uid';

import InfoCard from 'components/cards/InfoCard';
import SimpleList from 'components/interables/SimpleList';

import { Container } from 'redux';

const MockedItem = (data) => (
  <span>
    <bold> { data.feature }: </bold> { data.description }
  </span>
)

export const FeatureListContainer = ({sessions}) => {
  const infoCards = sessions.map(i => (
      <InfoCard key={uid()} title={i.title}>
        <SimpleList renderedItem={MockedItem} items={i.list} />
      </InfoCard>
  ))

  return (
    <div>
      {infoCards}
    </div>
  )
}

export default FeatureListContainer;
