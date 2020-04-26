// OS 9 Window
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const WindowOutline = props => (
  <div
    className='window-outline'
    style={{
      height: props.height,
      left: props.x,
      top: props.y,
      width: props.width,
    }}
  />
);

const Window = props => (
  <Fragment>
    {
      props.isMoving ?
        <WindowOutline
          height={props.height}
          x={props.newX}
          y={props.newY}
          width={props.width}
        />
        : null
    }
    <div
      className='window'
      onMouseDown={e => {
        const {className} = e.target;
        if(className === 'window' || className === 'header') {
          props.onWindowDragStart(e);
        }
      }}
      style={{
        height: props.height,
        left: props.x,
        top: props.y,
        width: props.width,
      }}
    >
      <div className='header'>
        <label className='title'>{props.title}</label>
      </div>
      <div className='content'>
      </div>
    </div>
  </Fragment>
);

Window.defaultProps = {
  title: 'Window'
};

export default Window;
