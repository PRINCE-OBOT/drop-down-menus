import './style.css';

const dropItem = document.querySelector('.drop-down_menu');
const dropBtn = document.querySelector('.drop-down_btn');

const dropItem2 = document.querySelector('.drop-down_menu2');
const dropBtn2 = document.querySelector('.drop-down_btn2');

class DropdownMenu {
  constructor({ dropdownMenu, dropdownBtn }) {
    this.dropdownMenu = dropdownMenu;
    this.dropdownBtn = dropdownBtn;
    this.bindEvent = this._bindEvent();
  }

  _bindEvent() {
    this.dropdownBtn.addEventListener('click', this._toggleDropdownMenu.bind(this));

    document.addEventListener('click', this._closeDropdownMenu.bind(this));
  }

  _toggleDropdownMenu() {
    this.dropdownMenu.classList.toggle('hide');
  }

  _closeDropdownMenu(e) {
    if (this.dropdownBtn === e.target) return;

    this.dropdownMenu.classList.add('hide');
  }
}

new DropdownMenu({ dropdownBtn: dropBtn, dropdownMenu: dropItem });
new DropdownMenu({ dropdownBtn: dropBtn2, dropdownMenu: dropItem2 });
