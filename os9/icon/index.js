// OS 9 Icon
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className='icon' style={{left: this.props.x, top: this.props.y}}>
        <img className='icon-image'/>
        <p className='icon-label'>
          {this.props.title}
        </p>
      </div>
    );
  }
}

Icon.defaultProps = {
  title: 'Window',
  x: 0,
  y: 0
};

export default Icon;
