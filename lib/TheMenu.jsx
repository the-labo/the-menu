'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import TheMenuItem from './TheMenuItem'
import TheMenuStyle from './TheMenuStyle'

/**
 * Menu of the-components
 */
class TheMenu extends React.Component {
  render () {
    const { props } = this
    const {
      children,
      className,
      grid,
    } = props
    return (
      <ul {...htmlAttributesFor(props, { except: ['className'] })}
          {...eventHandlersFor(props, { except: [] })}
          className={c('the-menu', className, {
            'the-menu-grid': grid,
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
  grid: PropTypes.bool,
}

TheMenu.defaultProps = {
  grid: false,
  role: 'menu',
}

TheMenu.displayName = 'TheMenu'

export default TheMenu
