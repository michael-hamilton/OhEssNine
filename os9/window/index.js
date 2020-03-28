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
      x: 0,
      xOffset: 0,
      y: 0,
      yOffset: 0,
      width: 600,
    };
  }


  render() {
    return (
      <div
        className='window'
        onMouseDown={(e) => {
          this.setState({
            isMoving: true,
            xOffset: e.nativeEvent.offsetX,
            yOffset: e.nativeEvent.offsetY,
          })
        }}
        onMouseUp={() => this.setState({isMoving: false, xOffset: 0, yOffset:0})}
        onMouseLeave={() => this.setState({isMoving: false, xOffset: 0, yOffset:0})}
        onMouseMove={(e) => {
          if(this.state.isMoving) {
            this.setState({
              x: e.pageX - this.state.xOffset,
              y: e.pageY - this.state.yOffset
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
