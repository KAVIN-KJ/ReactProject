import React from 'react'
import './github/workflows/deploy.yml'
import './Styles/ButtonReact.css'
const ButtonReact = (props) => {
  return (
    <button className='ButtonReact'>{props.text}</button>
  )
}
ButtonReact.defaultProps = {
  text: "Button"
};

export default ButtonReact