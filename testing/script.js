import DropdownMenu from './lib/index.mjs'

const dropItem = document.querySelector('.drop-down_menu');
const dropBtn = document.querySelector('.drop-down_btn');

const dropItem2 = document.querySelector('.drop-down_menu2');
const dropBtn2 = document.querySelector('.drop-down_btn2');

new DropdownMenu({ dropdownToggleBtn: dropBtn, dropdownMenu: dropItem });
new DropdownMenu({ dropdownToggleBtn: dropBtn2, dropdownMenu: dropItem2 });
