'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheIcon from 'the-icon'
import TheLink from 'the-link'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Menu of the-components
 */
class TheMenuItem extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      children,
      text,
      to,
      icon,
      active
    } = props
    const Inner = to ? TheLink : 'span'
    return (
      <li {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={c('the-menu-item', className, {
            'the-menu-item-active': active
          })}
      >
        <Inner to={to} className='the-menu-item-inner'>
          <TheIcon className={c('the-menu-item-icon', icon)}/>
          <span className='the-menu-item-text'>{text}</span>
          <span className='the-menu-item-children'>{children}</span>
        </Inner>
      </li>
    )
  }
}

TheMenuItem.propTypes = {
  /** Icon class name */
  icon: PropTypes.string,
  /** Link to */
  to: PropTypes.string,
  /** Active or not */
  active: PropTypes.bool
}

TheMenuItem.defaultProps = {
  icon: null,
  to: null,
  active: false
}

TheMenuItem.displayName = 'TheMenuItem'

export default TheMenuItem
