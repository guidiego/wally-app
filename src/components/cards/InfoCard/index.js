import React, { PropTypes } from 'react'

import _ from './InfoCard.sass'
import classNames from 'classnames'

export const InfoCard = ({ children, title, hide }) => {
  const finalClass = classNames({
      [_['info-card']] : true,
      [_['info-card-slim']] : hide
  })

  return (
    <div className={finalClass}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  title: "",
  chidren: null,
  hide: true
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  chidren: PropTypes.element,
  hide: PropTypes.bool
}

export default InfoCard;
