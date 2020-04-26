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
        {title: 'Icon 1', x: 1100, y: 50},
        {title: 'Icon 2', x: 1100, y: 150},
      ],
      windows: [{
        isMoving: false,
        offsetX: null,
        offsetY: null,
        x: 100,
        y: 100,
        newX: null,
        nexY: null,
        height: 400,
        width: 600,
      }]
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

  onMouseMove(e) {
    if(this.state.windows.isMoving) {
      this.setState({
        windows: {
          ...this.state.window,
          newX: e.screenX - this.state.windows.xOffset,
          newY: e.pageY - this.state.windows.yOffset - 32
        }
      })
    }
  }

  handleWindowDragStart(e) {
    this.setState({
      windows: {
        ...this.state.windows,
        isMoving: true,
        xOffset: e.nativeEvent.offsetX,
        yOffset: e.nativeEvent.offsetY,
        newX: this.state.windows.x,
        newY: this.state.windows.y,
      }
    });
  }

  onMouseUp(e) {
    this.setState({
      windows: {
        ...this.state.windows,
        isMoving: false,
        x: this.state.windows.newX || this.state.windows.x,
        y: this.state.windows.newY || this.state.windows.y,
        newX: null,
        newY: null
      }
    });
  }

  renderWindows(windows) {
    console.log(windows);
    return windows.map(window => (
      <Window
        x={window.x}
        y={window.y}
        newX={window.newX}
        newY={window.newY}
        height={window.height}
        width={window.width}
        onWindowDragStart={this.handleWindowDragStart}
        isMoving={window.isMoving}
      />
    ))
  }

  render() {
    return (
      <div
        className='desktop'
        onContextMenu={e => this.handleContextMenu(e)}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseUp={e => this.onMouseUp(e)}
        style={{backgroundColor: preferences.desktop.background}}
      >
        {this.renderWindows(this.state.windows)}
        {this.renderIcons()}

        {/*<Alert*/}
        {/*  text='This is an alert.'*/}
        {/*  icon={alert}*/}
        {/*  buttons={[*/}
        {/*    {title: 'No'},*/}
        {/*    {title: 'Yes'}*/}
        {/*  ]}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Desktop;
