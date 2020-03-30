// OS 9 Button
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const Button = props => <button className='button'>{props.title}</button>;

Button.defaultProps = {
  title: 'Ok'
};

export default Button;
