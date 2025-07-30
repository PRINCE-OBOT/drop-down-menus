# Dropdown-menu-vanilla

A lightweight, reusable dropdown menu for JavaScript projects.

## Installation

```bash
npm install dropdown-menu-vanilla
```

## Usage

#### HTML Structure

```html
<button class="<dropdown_toggle-button>">Menu</button>

<ul class="<dropdown_menu> hide">
  <li class="edit">Edit</li>
  <li class="copy">Copy</li>
  <li class="delete">Delete</li>
</ul>
```
- `.dropdown_toggle-button` is the button that triggers the dropdown.

- `.dropdown_menu` holds the menu items, the menu item should also have the class of `.hide`

- `.hide` class controls visibility.


#### CSS Requirement

Add this your CSS so the dropdown hides correctly

```css
.dropdown_menu.hide{
    display: none;
}
```

#### JavaScript commonJS
```js
const { DropdownMenu } = require('dropdown-menu');

new DropdownMenu({
  dropdownBtn: '<dropdown-toggle-button>',
  dropdownMenu: '<drop-menu>',
});
```

#### JavaScript ESModule
```js
import DropdownMenu from 'dropdown-menu'

new DropdownMenu({
  dropdownBtn: '<dropdown-toggle-button>',
  dropdownMenu: '<drop-menu>',
});
```
