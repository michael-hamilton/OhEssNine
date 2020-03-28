// OS 9 Menu
import React, {Component} from 'react';
import './styles.sass';
import menuItems from "./menuItems";

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: null
    }
  }

  componentDidMount() {
    this.getTime();
  }

  getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const time = `${hours}:${minutes}:${seconds}`;
    this.setState({time});
    setTimeout(() => this.getTime(), 500);
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
        <ul className='align-right'><li className='no-hover'>{this.state.time}</li></ul>
      </menu>
    );
  }
}

export default Menu;
