'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheMenu from './TheMenu'
import TheMenuItem from './TheMenuItem'
import TheIcon from 'the-icon'

import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Drop down menu
 */
class TheDropDownMenu extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = { open: false }
  }

  render () {
    const s = this
    const { props, state } = s
    let { className, label, children } = props
    let { open } = state
    const { Button } = TheDropDownMenu
    return (
      <div { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
           { ...eventHandlersFor(props, { except: [] })}
           className={ classnames('the-dropdown-menu', className, {
             'the-dropdown-menu-open': open
           }) }
      >
        <Button onClick={(e) => s.toggleDropDown()}>{label}</Button>
        <div className='the-dropdown-menu-inner'>
          <TheMenu>{children}</TheMenu>
        </div>
      </div>
    )
  }

  toggleDropDown () {
    const s = this
    s.setState({
      open: !s.state.open
    })
  }

  static Button (props) {
    let {
      className,
      children
    } = props
    return (
      <a { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
         { ...eventHandlersFor(props, { except: [] })}
         className={classnames('the-dropdown-menu-button', className)}
      >
        <span className='the-dropdown-menu-button-text'>
          {children}
        </span>
        <TheIcon className={classnames('the-dropdown-menu-button-icon', TheDropDownMenu.UP_ICON)}>
        </TheIcon>
      </a>
    )
  }

  static Item (props) {
    let { className } = props
    return (
      <TheMenuItem {...props}
                   className={classnames('the-dropdown-menu-item', className)}
      />
    )
  }
}

TheDropDownMenu.UP_ICON = 'fa fa-caret-up'

TheDropDownMenu.propTypes = {
  /** Label for toggle button */
  label: PropTypes.node.isRequired
}

TheDropDownMenu.defaultProps = {}

TheDropDownMenu.displayName = 'TheDropDownMenu'

export default TheDropDownMenu
