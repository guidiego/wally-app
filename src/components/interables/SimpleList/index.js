import React, { PropTypes } from 'react'
import uid from 'uid';

import SimpleListWrapper from './SimpleListWrapper';
import SimpleListItem from './SimpleListItem';

export const SimpleList = ({ className, items, renderedItem }) => {
  const listItems = items.map(i => (<SimpleListItem key={uid()} renderedItem={renderedItem} data={i} />))

  return (
    <SimpleListWrapper className={className}>
      { listItems }
    </SimpleListWrapper>
  )
}

SimpleList.defaultProps = {
  items: [],
  className: ""
}

SimpleList.propTypes = {
  item: PropTypes.arrayOf({}),
  className: PropTypes.string,
  renderedItem: PropTypes.element
}

export default SimpleList;
