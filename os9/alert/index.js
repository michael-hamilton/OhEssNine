// OS 9 Window
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

class Window extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='window'
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
