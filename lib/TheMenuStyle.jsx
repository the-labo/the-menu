'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheMenu */
const TheMenuStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-menu-style', className) }
            styles={ TheMenuStyle.data(options) }
  />
)

TheMenuStyle.displayName = 'TheMenuStyle'
TheMenuStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheMenuStyle.defaultProps = {
  options: {}
}

TheMenuStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    dominantColor = ThemeValues.dominantColor
  } = options
  return Object.assign({},
    asStyleData('.the-menu', {
      '': {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: 0,
        margin: 0
      },
      '.the-menu-item': {
        padding: 0,
        margin: 0
      },
      '.the-menu-item-inner': {
        display: 'flex',
        color: 'inherit',
        textDecoration: 'none',
        flexDirection: 'row',
        alignItems: 'center'
      },
      '.the-menu-item-icon': {},
      '.the-menu-item-text': {}
    }),
    asStyleData('.the-menu.the-menu-grid', {
      '': {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row'
      },
      '.the-menu-item-inner': {
        textDecoration: 'center',
        flexDirection: 'column'
      },
      '.the-menu-item-icon': {
        fontSize: '2em'
      },
      '.the-menu-item-text': {
        fontSize: 'smaller'
      }
    })
  )
}

export default TheMenuStyle
