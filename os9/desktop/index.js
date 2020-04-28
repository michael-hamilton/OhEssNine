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
      activeWindow: null,
      zIndexes: ['w1', 'w2'],
      windows: {
        w1: {
          offsetX: null,
          offsetY: null,
          x: 100,
          y: 100,
          newX: null,
          nexY: null,
          height: 400,
          width: 600,
        },
        w2: {
          offsetX: null,
          offsetY: null,
          x: 400,
          y: 400,
          newX: null,
          nexY: null,
          height: 200,
          width: 200,
        }
      }
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
    if(this.state.activeWindow) {
      this.setState({
        windows: {
          ...this.state.windows,
          [this.state.activeWindow]: {
            ...this.state.windows[this.state.activeWindow],
            newX: e.screenX - this.state.windows[this.state.activeWindow].xOffset,
            newY: e.pageY - this.state.windows[this.state.activeWindow].yOffset - 32
          }
        }
      })
    }
  }

  handleWindowDragStart(e, windowKey) {
    this.updateWindowZIndexes(windowKey);
    this.setState({
      activeWindow: windowKey,
      windows: {
        ...this.state.windows,
        [windowKey]: {
          ...this.state.windows[windowKey],
          xOffset: e.nativeEvent.offsetX,
          yOffset: e.nativeEvent.offsetY,
          newX: this.state.windows[windowKey].x,
          newY: this.state.windows[windowKey].y,
        }
      }
    });
  }

  updateWindowZIndexes(windowKey) {
    const oldIndexes = this.state.zIndexes;
    oldIndexes.splice(this.state.zIndexes.indexOf(windowKey), 1);
    const zIndexUpdate = [windowKey, ...oldIndexes];

    this.setState({zIndexes: zIndexUpdate.reverse()});
  }

  onMouseUp(e) {
    this.setState({
      activeWindow: null,
      windows: {
        ...this.state.windows,
        [this.state.activeWindow]: {
          ...this.state.windows[this.state.activeWindow],
          x: this.state.windows[this.state.activeWindow].newX || this.state.windows[this.state.activeWindow].x,
          y: this.state.windows[this.state.activeWindow].newY || this.state.windows[this.state.activeWindow].y,
          newX: null,
          newY: null
        }
      }
    });
  }

  renderWindows(windows, activeWindowKey, handleWindowDragStart, handleWindowFocus) {
    const renderedWindows = [];

    Object.keys(windows).forEach((windowKey) => {
      const currentWindow = this.state.windows[windowKey];
      const currentWindowZIndex = this.state.zIndexes.indexOf(windowKey);
      renderedWindows.push(
        <Window
          key={windowKey}
          x={currentWindow.x}
          y={currentWindow.y}
          z={this.state.zIndexes.indexOf(windowKey)}
          isActiveWindow={currentWindowZIndex === this.state.zIndexes.length - 1}
          newX={currentWindow.newX}
          newY={currentWindow.newY}
          height={currentWindow.height}
          width={currentWindow.width}
          onWindowFocus={(e) => handleWindowFocus(e, windowKey)}
          onWindowDragStart={(e) => handleWindowDragStart(e, windowKey)}
          isMoving={activeWindowKey === windowKey}
        />
      )
    });

    return renderedWindows;
  }

  handleWindowFocus(e, windowKey) {
    this.updateWindowZIndexes(windowKey);
  }

  render() {
    return (
      <div
        className='desktop'
        onContextMenu={e => this.handleContextMenu(e)}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseUp={e => this.onMouseUp(e)}
        onWindowFocus={e => this.onMouseUp(e)}
        style={{backgroundColor: preferences.desktop.background}}
      >
        {this.renderWindows(this.state.windows, this.state.activeWindow, this.handleWindowDragStart.bind(this), this.handleWindowFocus.bind(this))}
        {this.renderIcons()}

        {/*<Alert*/}
        {/*  text='This is an alert.'*/}
        {/*  icon={alert}*/}
        {/*  buttons={[{title: 'No'}, {title: 'Yes'}]}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Desktop;
