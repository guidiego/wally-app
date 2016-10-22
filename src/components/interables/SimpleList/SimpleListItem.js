import React, { PropTypes } from 'react'

export const SimpleListItem = ({ data, renderedItem }) => {
  return (
    <li>
      <renderedItem data={data} />
    </li>
  )
}

SimpleListItem.defaultProps = {
  data: PropTypes.object,
  renderedItem: null
}

SimpleListItem.propTypes = {
  data: PropTypes.object,
  renderedItem: PropTypes.element
}

export default SimpleListItem;
