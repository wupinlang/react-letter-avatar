import React, { Component } from 'react'
import PropTypes from 'prop-types'
import google from './colors'

class ReactLetterAvatar extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    radius: PropTypes.number,
  };

  render(){
    let {name, size, radius} = this.props
    let char = name.trim()[0].toUpperCase()

    let bgColor
    if( /[A-Z]/.test(char) ){
      let index = char.charCodeAt() - 65
      bgColor = google[index]
    }else if( /[\d]/.test(char) ){
      bgColor = google[parseInt(char)]
    }else{
      bgColor = [0,0,0]
    }

    let style = {
      backgroundColor: `rgb(${bgColor})`,
      width: size,
      height: size,
      font: Math.floor(size/2) + 'px/100px Helvetica, Arial, sans-serif',
      lineHeight: (size + Math.floor(size/10)) + 'px',
      color: "rgba(233,233,233,0.9)",
      textAlign: 'center',
      borderRadius: radius 
    }

    return(
      <div style={ style }>
        {char}
      </div>
    )
  };
};

export default ReactLetterAvatar;