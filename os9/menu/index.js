// OS 9 Menu
import React, {Component} from 'react';
import './styles.sass';

class Menu extends Component {
  render() {
    return (
      <menu className='menu-bar'>
        <ul className='align-left'>
          <li>File</li>
          <ul className='submenu'>
            <li>About This Computer</li>
            <li className='menu-separator' />
            <li>Menu 1</li>
          </ul>
          <li>Edit</li>
          <li>View</li>
          <li>Window</li>
          <li>Special</li>
          <li>Help</li>
        </ul>
        <ul className='align-right'>
          <li className='no-hover'>12:00 PM</li>
        </ul>
      </menu>
    );
  }
}

export default Menu;
