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
    backgroundColor = ThemeValues.backgroundColor,
    contentWidth = ThemeValues.contentWidth,
    lightBorderColor = ThemeValues.lightBorderColor,
    tappableHeight = ThemeValues.tappableHeight,
    lightLinkColor = ThemeValues.lightLinkColor,
    hoverOpacity = ThemeValues.hoverOpacity,
    activeOpacity = ThemeValues.activeOpacity,
  } = options
  return Object.assign({},
    asStyleData('.the-menu', {
      '': {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: 0,
        margin: '8px 0',
        backgroundColor,
        maxWidth: contentWidth
      },
      '.the-menu-item': {
        padding: 0,
        margin: 0,
        borderBottom: `1px solid ${lightBorderColor}`,
        cursor: 'pointer'
      },
      '.the-menu-item:hover': {
        opacity: hoverOpacity
      },
      '.the-menu-item:active': {
        opacity: activeOpacity
      },
      '.the-menu-item-active,.the-menu-item-active:hover,.the-menu-item-active:active': {
        opacity: 1,
        cursor: 'default'
      },
      '.the-menu-item-inner': {
        display: 'flex',
        color: 'inherit',
        textDecoration: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: tappableHeight,
        padding: '0 4px'
      },
      '.the-menu-item-icon': {},
      '.the-menu-item-text': {},
      '.the-menu-end': { display: 'none' }
    }),
    asStyleData('.the-menu.the-menu-grid', {
      '': {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row'
      },
      '.the-menu-item': {
        border: 'none',
        minWidth: '20%'
      },
      '.the-menu-item-inner': {
        textDecoration: 'none',
        flexDirection: 'column',
        padding: '16px'
      },
      '.the-menu-item-icon': {
        fontSize: '2em'
      },
      '.the-menu-item-text': {
        fontSize: 'smaller'
      },
      '.ap-menu-end': {
        flex: 'auto',
        display: 'inline-block',
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: 'none'
      }
    })
  )
}

export default TheMenuStyle
