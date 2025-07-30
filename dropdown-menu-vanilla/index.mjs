export default class DropdownMenu {
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
    if (this.dropdownToggleBtn === e.target || this.dropdownMenu.contains(e.target)) return;

    this.dropdownMenu.classList.add('hide');
  }
}
