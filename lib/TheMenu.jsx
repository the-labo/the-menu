'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheMenuStyle from './TheMenuStyle'
import TheMenuItem from './TheMenuItem'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Menu of the-components
 */
class TheMenu extends React.Component {
  render () {
    const {props} = this
    const {
      className,
      children,
      grid
    } = props
    return (
      <ul {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={c('the-menu', className, {
            'the-menu-grid': grid
          })}
      >
        {children}
        <li className='the-menu-end'>
        </li>
      </ul>
    )
  }
}

TheMenu.Style = TheMenuStyle
TheMenu.Item = TheMenuItem

TheMenu.propTypes = {
  /** Grid layout */
  grid: PropTypes.bool
}

TheMenu.defaultProps = {
  grid: false
}

TheMenu.displayName = 'TheMenu'

export default TheMenu
