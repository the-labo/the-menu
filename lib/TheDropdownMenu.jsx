'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheMenu from './TheMenu'
import TheMenuItem from './TheMenuItem'
import { get } from 'the-window'
import { TheIcon } from 'the-icon'
import withClickOutside from 'react-click-outside'

import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Drop down menu
 */
class TheDropDownMenu extends React.Component {
  constructor (props) {
    super(props)
    const s = this
    s.state = {open: props.open}
    s.close = s.toggleDropDown.bind(s, false)
    s.unlistenHistory = null
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
           className={c('the-dropdown-menu', className, {
             'the-dropdown-menu-open': open,
             'the-dropdown-menu-righted': righted
           })}
      >
        <div className='the-dropdown-menu-content'>
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
    const {eventsToClose} = s.props
    const window = get('window')
    const history = s.context.history || s.props.history
    for (const event of eventsToClose) {
      window.addEventListener(event, s.close)
    }
    if (history) {
      s.unlistenHistory = history.listen(s.close)
    }
  }

  componentWillUnmount () {
    const s = this
    const {eventsToClose} = s.props
    const window = get('window')
    for (const event of eventsToClose) {
      window.removeEventListener(event, s.close)
    }
    s.unlistenHistory && s.unlistenHistory()
  }

  handleClickOutside () {
    const s = this
    s.toggleDropDown(false)
  }

  static Button (props) {
    const {
      className,
      children
    } = props
    return (
      <a {...htmlAttributesFor(props, {except: ['className']})}
         {...eventHandlersFor(props, {except: []})}
         className={c('the-dropdown-menu-button', className)}
      >
        <span className='the-dropdown-menu-button-text'>
          {children}
        </span>
        <TheIcon className={c('the-dropdown-menu-button-icon', TheDropDownMenu.UP_ICON)}>
        </TheIcon>
      </a>
    )
  }

  static Item (props) {
    const {className} = props
    return (
      <TheMenuItem {...props}
                   className={c('the-dropdown-menu-item', className)}
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
  righted: PropTypes.bool,

  /** Event types to close for */
  eventsToClose: PropTypes.arrayOf(PropTypes.string)
}

TheDropDownMenu.defaultProps = {
  open: false,
  righted: false,

  eventsToClose: ['hashchange']
}

TheDropDownMenu.displayName = 'TheDropDownMenu'

TheDropDownMenu.contextTypes = {
  history: PropTypes.object
}

export default withClickOutside(TheDropDownMenu)
