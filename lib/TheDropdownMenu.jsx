'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheMenu from './TheMenu'
import TheMenuItem from './TheMenuItem'
import { get } from 'the-window'
import TheIcon from 'the-icon'

import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Drop down menu
 */
class TheDropDownMenu extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {open: props.open}
    s.handleDocumentClick = s.handleDocumentClick.bind(s)
    s.elm = null
  }

  render () {
    const s = this
    const {props, state} = s
    const {
      className,
      label,
      righted,
      children
    } = props
    const {open} = state
    const {Button} = TheDropDownMenu
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={classnames('the-dropdown-menu', className, {
             'the-dropdown-menu-open': open,
             'the-dropdown-menu-righted': righted
           })}
      >
        <div className='the-dropdown-menu-content'
             ref={(elm) => { s.elm = elm }}>
          <Button onClick={(e) => s.toggleDropDown()}>{label}</Button>
          <div className='the-dropdown-menu-inner'>
            <TheMenu>{children}</TheMenu>
          </div>
        </div>
      </div>
    )
  }

  toggleDropDown (open) {
    const s = this
    if (arguments.length === 0) {
      open = !s.state.open
    }
    s.setState({
      open
    })
  }

  componentDidMount () {
    const s = this
    const window = get('window')
    window.addEventListener('click', s.handleDocumentClick)
  }

  componentWillUnmount () {
    const s = this
    const window = get('window')
    window.removeEventListener('click', s.handleDocumentClick)
  }

  handleDocumentClick (e) {
    const s = this
    const {elm} = s

    if (!elm) {
      return
    }
    const inside = elm.contains(e.target)
    console.log('inside', inside)
    if (!inside) {
      s.toggleDropDown(false)
    }
  }

  static Button (props) {
    const {
      className,
      children
    } = props
    return (
      <a {...htmlAttributesFor(props, {except: ['className']})}
         {...eventHandlersFor(props, {except: []})}
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
    const {className} = props
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
  label: PropTypes.node.isRequired,
  /** Open  when mounted */
  open: PropTypes.bool,

  /** Show on righthand */
  righted: PropTypes.bool
}

TheDropDownMenu.defaultProps = {
  open: false,
  righted: false
}

TheDropDownMenu.displayName = 'TheDropDownMenu'

export default TheDropDownMenu
