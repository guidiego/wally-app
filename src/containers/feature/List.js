import React from 'react';
import uid from 'uid';

import InfoCard from 'components/cards/InfoCard';
import SimpleList from 'components/interables/SimpleList';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sessions: state.getIn(['tree','items']),
    opened: state.getIn(['tree','opened'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    openTab: (indexToOpen) => dispatch({ type: 'OPEN', indexToOpen })
  }
}

const MockedItem = (data) => (
  <span>
    <bold> { data.feature }: </bold> { data.description }
  </span>
)

export const FeatureListContainer = ({sessions, opened, openTab}) => {
  const infoCards = sessions.map((item, index) => (
      <InfoCard key={uid()} title={item.title} hide={!(opened == index)} 
        onClick={openTab} index={index}>
        <SimpleList renderedItem={MockedItem} items={item.list} />
      </InfoCard>
  ))

  return (
    <div>
      {infoCards}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureListContainer);
