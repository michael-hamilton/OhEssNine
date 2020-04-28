// OS 9 Startup
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import MikeOS from '../resources/images/mikeos.jpg';
import './styles.sass';

const Loader = (props) => (
  <div className='loader'>
    <label className='loader-label'>Starting Up...</label>
    <div className='loading-bar'>
      <div className='loading-progress' style={{width: `${props.progress}%`}} />
    </div>
  </div>
);

class Startup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaderProgress: 0
    };

    this.loaderSpeed = 50;
  }

  componentDidMount() {
    if(Cookies.get('hasLoadedBefore')) {
      this.loaderSpeed = 10;
    }
    this.initPseudoLoader();
    Cookies.set('hasLoadedBefore', true);
  }

  handleContextMenu(e) {
    e.preventDefault();
  }

  // Updates the pseudo loader to simulate a loading bar
  initPseudoLoader(){
    let updateInterval;
    const update = (u, t) => {
      this.setState({loaderProgress: this.state.loaderProgress + u});
      if(this.state.loaderProgress >= 100) {
        clearInterval(updateInterval);
      }
    };
    updateInterval = setInterval(() => update(1), this.loaderSpeed);
  }

  render() {
    return (
      <div
        className='startup-wrapper'
        onContextMenu={e => this.handleContextMenu(e)}
        style={{display: this.state.loaderProgress >= 100 ? 'none' : 'flex'}}
      >
        <div className='startup'>
          <div className='content'>
            <div style={{backgroundImage: `url(${MikeOS})`}} className='startup-image'/>
            <h1 className='startup-title'>Mike OS 9</h1>
          </div>
          <Loader progress={this.state.loaderProgress}/>
        </div>
      </div>
    );
  }
}

Startup.defaultProps = {
};

export default Startup;
