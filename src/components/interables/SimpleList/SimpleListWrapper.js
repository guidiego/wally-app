import React, { PropTypes } from 'react'

export const SimpleListWrapper = ({ className, children }) => (
  <ul className={className}>
    { children }
  </ul>
);

SimpleListWrapper.defaultProps = {
  children: null,
  className: ""
}

SimpleListWrapper.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default SimpleListWrapper;
