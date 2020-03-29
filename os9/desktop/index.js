// OS 9 Desktop
import React, {Component} from 'react';
import * as preferences from '../../preferences';
import Window from '../window';
import Icon from '../icon';
import './styles.sass';

class Desktop extends Component {

  handleContextMenu(e) {
    e.preventDefault();
  }

  renderIcons() {
    const icons = [
      {title: 'Icon 1', x: 580, y: 50},
      {title: 'Icon 2asda', x: 1100, y: 150},
    ];

    return icons.map(icon => <Icon title={icon.title} x={icon.x} y={icon.y} />);
  }

  render() {
    return (
      <div
        className='desktop'
        onContextMenu={e => this.handleContextMenu(e)}
        style={{backgroundColor: preferences.desktop.background}}
      >
        <Window />
        {this.renderIcons()}
      </div>
    );
  }
}

export default Desktop;
