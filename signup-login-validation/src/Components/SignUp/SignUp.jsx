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
      placeholder: "Username",
      errorMessage: "Username must be greater than 3 characters",
      label:"Username",
    },
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Enter a Valid Email",
      label: "Email",
    },
    {
      id:3,
      name: "birthdate",
      type: "date",
      placeholder: "Enter Bithdate",
      label: "Birthdate",
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage: "Password should be greater than 6 characters",
      label: "Password",
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Your Passwords doesnot Match",
      label:"Confirm Password",
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
