'use strict'

import React from 'react'
import { TheMenu, TheMenuStyle } from 'the-menu'

class ExampleComponent extends React.PureComponent {
  render () {
    const ExampleMenu = ({ grid = false }) => (
      <TheMenu grid={ grid }>
        <TheMenuItem icon='fa fa-support' text='Help'/>
        <TheMenuItem icon='fa fa-info-circle' text='About'/>
      </TheMenu>
    )
    return (
      <div>
        <TheMenuStyle/>

        <h3>Default Menu</h3>
        <div>
          <ExampleMenu/>
        </div>

        <hr/>

        <h3>Grid Menu</h3>
        <div>
          <ExampleMenu grid/>
        </div>
      </div>

    )
  }
}

export default ExampleComponent
