import React from 'react'
import './FormInputs.css'

export const FormInputs = (props) => {

    const {label, errorMessage, onChange, id, ...inputProps} = props
  
    return (
      <div className='form-inputs'>
          <label>{label}</label>
          <input {...inputProps} onChange={onChange}/>
          <span>{errorMessage}</span>
      </div>
    )
  }

export default FormInputs