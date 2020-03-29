// OS 9 Menu
import React, {Component} from 'react';
import menuItems from "./menuItems";
import './styles.sass';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: null,
      date: null,
      showTime: true
    }
  }

  componentDidMount() {
    this.setTime();
  }

  setTime() {
    const now = new Date();
    const hour24 = now.getHours();
    const hours = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24;
    const minutes = now.getMinutes();
    const month = now.getMonth() + 1;
    const period = hour24 > 12 ? 'PM' : 'AM';
    const day = now.getDate();
    const year = now.getFullYear();
    const time = `${hours}:${minutes > 9 ? minutes : `0${minutes}`} ${period}`;
    const date = `${month}/${day}/${year}`;

    this.setState({time, date});
    setTimeout(() => this.setTime(), 500);
  }

  // Accepts an array of menu item objects and returns a properly structured menu
  renderMenuItems(menuItems) {
    return menuItems.map(menuItem => {
      let subMenu;
      if(menuItem.items) {
        subMenu = <ul className='submenu'>{this.renderMenuItems(menuItem.items)}</ul>;
      }
      if(menuItem.sep) {
        return <li className='menu-separator' />
      }
      return <li onClick={menuItem.onClick}>{menuItem.name}{subMenu}</li>
    })
  }

  render() {
    return (
      <menu className='menu-bar'>
        <ul className='align-left'>{this.renderMenuItems(menuItems)}</ul>
        <ul className='align-right'>
          <li className='no-hover' onClick={() => this.setState({showTime: !this.state.showTime})}>
            {this.state.showTime ? this.state.time : this.state.date}
          </li>
        </ul>
      </menu>
    );
  }
}

export default Menu;
