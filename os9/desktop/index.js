// OS 9 Desktop
import React, {Component} from 'react';
import * as preferences from '../../preferences';
import Window from '../window';
import Alert from '../alert';
import Icon from '../icon';
import alert from '../resources/icons/alert.png';
import './styles.sass';

class Desktop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      icons: [
        {title: 'Icon 1', x: 580, y: 50},
        {title: 'Icon 2', x: 1100, y: 150},
      ]
    }
  }

  handleContextMenu(e) {
    e.preventDefault();
  }



  renderIcons() {
    return (
      this.state.icons.map((icon, key) =>
        <Icon title={icon.title} x={icon.x} y={icon.y} key={key} />)
    );
  }

  render() {
    return (
      <div
        className='desktop'
        onContextMenu={e => this.handleContextMenu(e)}
        style={{backgroundColor: preferences.desktop.background}}
      >
        <Window />
        {/*<Alert*/}
        {/*  text='This is an alert.'*/}
        {/*  icon={alert}*/}
        {/*  buttons={[*/}
        {/*    {title: 'No'},*/}
        {/*    {title: 'Yes'}*/}
        {/*  ]}*/}
        {/*/>*/}
        {this.renderIcons()}
      </div>
    );
  }
}

export default Desktop;
