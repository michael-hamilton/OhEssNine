// OS 9 Alert
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './styles.sass';

const renderButtons = buttons => (
  buttons.map(button => <Button title={button.title} />)
)

const Alert = props => (
  <div className='alert'>
    <div className='wrapper'>
      <div className='content'>
        <img src={props.icon} className='alert-icon' />
        <div className='alert-text'>
          <p>{props.text}</p>
        </div>
      </div>
      <div className='controls'>
        {renderButtons(props.buttons)}
      </div>
    </div>
  </div>
);

Alert.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

export default Alert;
