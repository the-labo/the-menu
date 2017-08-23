the-menu
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-menu
[bd_travis_url]: http://travis-ci.org/the-labo/the-menu
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-menu.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-menu
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-menu.svg?token=
[bd_license_url]: https://github.com/the-labo/the-menu/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-menu
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-menu.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-menu.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-menu
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-menu.svg
[bd_npm_url]: http://www.npmjs.org/package/the-menu
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-menu.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Menu of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-menu --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

[Live Demo](https://the-labo.github.io/the-menu/doc/demo/index.html#/) is hosted on GitHub Page

```javascript
'use strict'

import React from 'react'
import { TheMenu, TheDropdownMenu, TheMenuStyle } from 'the-menu'
import { TheRouter } from 'the-router'

class ExampleComponent extends React.PureComponent {
  render () {
    const s = this
    const ExampleMenu = ({grid = false}) => (
      <TheMenu grid={grid}>
        <TheMenu.Item icon='fa fa-support' text='Help' to='/help'/>
        <TheMenu.Item icon='fa fa-info-circle' text='About' to='/about'/>
        <TheMenu.Item icon='fa fa-sign-out' text='Logout' onClick={() => console.log('logout!')}/>
        <TheMenu.Item icon='fa fa-sun-o' text='Foo'/>
        <TheMenu.Item icon='fa fa-sun-o' text='Bar'/>
        <TheMenu.Item icon='fa fa-sun-o' text='Baz'/>
      </TheMenu>
    )
    return (
      <div>
        <TheRouter.Hash>
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

          <hr/>

          <h3>Drop Down</h3>

          <TheDropdownMenu label='Try me!'
          >
            <TheDropdownMenu.Item to='foo'>foo</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='bar'>bar</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='baz'>baz</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='quz'>quz</TheDropdownMenu.Item>
            <TheDropdownMenu.Item>1</TheDropdownMenu.Item>
            <TheDropdownMenu.Item>2</TheDropdownMenu.Item>
          </TheDropdownMenu>


          <br/>
          <br/>
          <br/>
          <br/>
        </TheRouter.Hash>
      </div>
    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheDropDownMenu

Drop down menu

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `label` | node  | Label for toggle button | `` |
| `open` | bool  | Open  when mounted | `false` |
| `righted` | bool  | Show on righthand | `false` |
| `eventsToClose` | arrayOf string | Event types to close for | `['hashchange']` |

### TheMenu

Menu of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `grid` | bool  | Grid layout | `false` |

### TheMenuItem

Menu of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `icon` | string  | Icon class name | `null` |
| `to` | string  | Link to | `null` |
| `active` | bool  | Active or not | `false` |

### TheMenuStyle

Style for TheMenu

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-menu/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
