'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheMenu */
const TheMenuStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-menu-style', className)}
            styles={TheMenuStyle.data(options)}
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
  const {ThemeValues} = TheStyle
  let {
    backgroundColor = ThemeValues.backgroundColor,
    overlayBackgroundColor = ThemeValues.overlayBackgroundColor,
    overlayBorderColor = ThemeValues.overlayBorderColor,
    contentWidth = ThemeValues.contentWidth,
    lightBorderColor = ThemeValues.lightBorderColor,
    tappableHeight = ThemeValues.tappableHeight,
    lightLinkColor = ThemeValues.lightLinkColor,
    hoverOpacity = ThemeValues.hoverOpacity,
    activeOpacity = ThemeValues.activeOpacity,
    animationDuration = 200
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
        padding: '4px 8px',
        lineHeight: '1.25em',
      },
      '.the-menu-item-icon': {},
      '.the-menu-item-text': {},
      '.the-menu-end': {display: 'none'}
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
    }),
    asStyleData('.the-dropdown-menu', {
      '&': {
        position: 'relative',
        display: 'inline-block',
        maxWidth: contentWidth
      },
      '.the-dropdown-menu-button': {
        display: 'flex',
        alignItems: 'center',
        borderColor: '#AAA',
        cursor: 'pointer',
        '&:hover': {opacity: hoverOpacity},
        '&:active': {opacity: activeOpacity},
        '.the-dropdown-menu-button-text': {
          width: '100%'
        },
        '.the-dropdown-menu-button-icon': {
          transformOrigin: '50% 50%',
          transform: 'rotate(-180deg)',
          transition: 'transform 100ms',
          boxSizing: 'border-box',
          textAlign: 'center',
          width: '1em',
          height: '1em'
        }
      },
      '.the-dropdown-menu-inner': {
        position: 'absolute',
        zIndex: 8,
        width: '100%',
        minWidth: tappableHeight * 3,
        maxWidth: contentWidth,
        backgroundColor: overlayBackgroundColor,
        border: `1px solid transparent`,
        opacity: 0,
        overflow: 'hidden',
        boxShadow: '0px 0px 0px rgba(0,0,0,0.33)',
        transition: `opacity ${animationDuration}ms, box-shadow ${animationDuration}ms, border-color ${animationDuration}ms`
      },
      '.the-menu': {
        margin: 0
      },
      '.the-menu-item': {
        transition: `max-height ${animationDuration}ms`,
        maxHeight: '0em',
        marginBottom: '-1px'
      },
      '&.the-dropdown-menu-open': {
        '.the-menu-item': {
          maxHeight: '3em',
          margin: 0
        },
        '.the-dropdown-menu-button-icon': {
          transform: 'rotate(0deg)'
        },
        '.the-dropdown-menu-inner': {
          borderColor: overlayBorderColor,
          opacity: 1,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.33)'
        }
      },
      '&.the-dropdown-menu-righted': {
        '.the-dropdown-menu-inner': {
          left: 'auto',
          right: '0'
        }
      }
    })
  )
}

export default TheMenuStyle
