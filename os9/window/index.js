// OS 9 Desktop
import React, {Component} from 'react';
import './styles.sass';
import * as preferences from '../../preferences';

class Window extends Component {
  render() {
    return (
      <div className='desktop' style={{backgroundColor: preferences.desktop.background}}>
        <div className='icon'>
          <img className='icon-image'/>
          <p className='icon-label'>
            Icon
          </p>
        </div>
      </div>
    );
  }
}

export default Window;
