import React from 'react';
import uid from 'uid';

import InfoCard from 'components/cards/InfoCard';
import SimpleList from 'components/interables/SimpleList';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  sessions: state.get('tree').get('items')
}

const mapDispatchToProps = (dispatch) => {
  openTab: (indexToOpen) => dispatch({ type: 'OPEN', indexToOpen })
}

const MockedItem = (data) => (
  <span>
    <bold> { data.feature }: </bold> { data.description }
  </span>
)

export const FeatureListContainer = ({sessions openTab}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureListContainer);
