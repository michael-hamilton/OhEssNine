// OS 9 Menu
import React, {Component} from 'react';
import './styles.sass';

class Menu extends Component {

  renderMenuItems(menuItems) {
    return menuItems.map(menuItem => {
      if(menuItem.items) {

      }
      return <li>{menuItem.name}</li>
    })
  }

  render() {
    return (
      <menu className='menu-bar'>
        <ul className='align-left'>
          <ul className='submenu'>
            <li>About This Computer</li>
            <li className='menu-separator' />
            <li>Menu 1</li>
          </ul>
          {
            this.renderMenuItems([
              {name: 'File', items: [
                  {name: 'Save'}
              ]},
              {name: 'Edit'},
              {name: 'View'},
              {name: 'Window'},
              {name: 'Special'},
              {name: 'Help'},
            ])
          }
        </ul>
        <ul className='align-right'>
          <li className='no-hover'>12:00 PM</li>
        </ul>
      </menu>
    );
  }
}

export default Menu;
