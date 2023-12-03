import React,{useState} from 'react'
import './SignUp.css'
import FormInputs from '../FormInputs/FormInputs'


export const SignUp = () => 
{
  const [values,setValues] = useState({
    username: "" ,
    email: "" ,
    birthdate: "" ,
    password: "" ,
    confirmPassword: "" ,
  })

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage: "Username must be between 3-10 characters without any special character",
      label:"Username",
      pattern:"^[a-zA-Z0-9_]{3,10}$",
      required:true,
    },
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Enter a Valid Email",
      label: "Email",
      pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
      required:true,
    },
    {
      id:3,
      name: "birthdate",
      type: "date",
      placeholder: "Enter Bithdate",
      label: "Birthdate",
      required:false,
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage: "Password should be greater than 6 characters with special character and numbers",
      label: "Password",
      pattern:"^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{7,}$",
      required:true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Your Passwords don't Match",
      label:"Confirm Password",
      pattern: values.password,
      required:true,
    },
  ]

    

  const handleSubmit = (e) => 
  {
    e.preventDefault()
  }

  const onChange = (e) =>
  {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className='signUp-page'>
      <form onSubmit={handleSubmit}>

        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInputs 
            key={input.id} {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        <button>Submit</button>

      </form>
    </div>
  ) 
}

export default SignUp
