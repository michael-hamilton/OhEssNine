// OS 9 Window
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMoving: false,
      height: 400,
      x: 0,
      y: 0,
      width: 400,
    };
  }


  render() {
    return (
      <div
        className='window'
        onMouseDown={() => this.setState({isMoving: true})}
        onMouseUp={() => this.setState({isMoving: false})}
        onMouseLeave={() => this.setState({isMoving: false})}
        onMouseMove={(e) => {
          if(this.state.isMoving) {
            this.setState({x: e.clientX, y: e.pageY})
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
