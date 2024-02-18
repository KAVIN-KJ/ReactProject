import React from 'react'
import ButtonReact from './ButtonReact'
import InputField from './InputField'
import InputPwd from './InputPwd'
import ReactSelect from './ReactSelect'
import './Styles/ReactForm.css'
import ReactRadio from './ReactRadio'

function ReactForm(){
  return(
      <div className='react-form'>
        <div>ENTER DETAILS</div>
        <InputField/>
        <InputPwd/>
        Choose Skill
        <ReactSelect/>
        <div className='RadioGroup'>
        <ReactRadio text = "Male" name = "Gender"/>
        <ReactRadio text = "Female" name = "Gender"/>
        </div>

        <ButtonReact/>
      </div>
  )
}

export default ReactForm