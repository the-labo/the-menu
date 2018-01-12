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
    this.state = {open: props.open}
    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.close = this.toggleDropDown.bind(this, false)
    this.unlistenHistory = null
  }

  render () {
    const {props, state} = this
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
          <Button onClick={this.toggleDropDown}>{label}</Button>
          <div className='the-dropdown-menu-inner'>
            <TheMenu>{children}</TheMenu>
          </div>
        </div>
      </div>
    )
  }

  toggleDropDown (open) {
    if (arguments.length === 0) {
      open = !this.state.open
    }
    this.setState({
      open
    })
  }

  componentDidMount () {
    const {eventsToClose} = this.props
    const window = get('window')
    const history = this.context.history || this.props.history
    for (const event of eventsToClose) {
      window.addEventListener(event, this.close)
    }
    if (history) {
      this.unlistenHistory = history.listen(this.close)
    }
  }

  componentWillUnmount () {
    const {eventsToClose} = this.props
    const window = get('window')
    for (const event of eventsToClose) {
      window.removeEventListener(event, this.close)
    }
    this.unlistenHistory && this.unlistenHistory()
  }

  handleClickOutside () {
    this.toggleDropDown(false)
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
