import React, { PropTypes } from 'react'

import _ from './InfoCard.sass'
import classNames from 'classnames'

export const InfoCard = ({ index, children, title, hide, onClick }) => {

  const finalClass = classNames({
      [_['info-card']] : true
  });

  const activeClass = classNames({
    [_['active']] : !hide
  });

  return (
    <div className={finalClass} onClick={() => onClick(index)}>
      <h2>{title}</h2>
      <div className={activeClass}>
        {children}
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  title: "",
  children: null,
  hide: true
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  hide: PropTypes.bool
}

export default InfoCard;