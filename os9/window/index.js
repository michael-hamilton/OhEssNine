// OS 9 Window
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 400,
      isMoving: false,
      x: 100,
      xOffset: null,
      y: 100,
      yOffset: null,
      width: 600,
    };
  }

  render() {
    return (
      <div
        className='window'
        onMouseDown={(e) => {
          const {className} = e.target;
          this.setState({
            isMoving: (className === 'window' || className === 'header'),
            xOffset: e.nativeEvent.offsetX,
            yOffset: e.nativeEvent.offsetY,
          })
        }}
        onMouseUp={() => this.setState({isMoving: false, xOffset: null, yOffset:null})}
        onMouseLeave={() => this.setState({isMoving: false, xOffset: null, yOffset:null})}
        onMouseMove={(e) => {
          if(this.state.isMoving && this.state.xOffset && this.state.yOffset) {
            this.setState({
              x: e.screenX - this.state.xOffset,
              y: e.pageY - this.state.yOffset - 32
            })
          }
        }}
        style={{
          height: this.state.height,
          left: this.state.x,
          top: this.state.y,
          width: this.state.width,
        }}
      >
        <div className='header'>
          <label className='title'>{this.props.title}</label>
        </div>
        <div className='content'>
        </div>
      </div>
    );
  }
}

Window.defaultProps = {
  title: 'Window'
};

export default Window;
