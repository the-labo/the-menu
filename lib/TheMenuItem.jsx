'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheIcon from 'the-icon'
import TheLink from 'the-link'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Menu of the-components
 */
class TheMenuItem extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children,
      text,
      to,
      icon
    } = props
    return (
      <li { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-menu-item', className) }
      >
        <TheLink to={ to } className='the-menu-item-inner'>
          <TheIcon className={classnames('the-menu-item-icon', icon)}/>
          <span className='the-menu-item-text'>{text}</span>
          <span className='the-menu-item-children'>{children}</span>

        </TheLink>
      </li>
    )
  }
}

TheMenuItem.propTypes = {
  /** Icon class name */
  icon: PropTypes.string,
  /** Link to */
  to: PropTypes.string
}

TheMenuItem.defaultProps = {
  icon: null,
  to: null
}

TheMenuItem.displayName = 'TheMenuItem'

export default TheMenuItem
