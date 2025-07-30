class DropdownMenu {
  constructor({ dropdownMenu, dropdownToggleBtn }) {
    this.dropdownMenu = dropdownMenu;
    this.dropdownToggleBtn = dropdownToggleBtn;
    this.bindEvent = this._bindEvent();
  }

  _bindEvent() {
    this.dropdownToggleBtn.addEventListener('click', this._toggleDropdownMenu.bind(this));

    document.addEventListener('click', this._closeDropdownMenu.bind(this));
  }

  _toggleDropdownMenu() {
    this.dropdownMenu.classList.toggle('hide');
  }

  _closeDropdownMenu(e) {
    if (this.dropdownToggleBtn === e.target) return;

    this.dropdownMenu.classList.add('hide');
  }
}

module.exports = { DropdownMenu };
