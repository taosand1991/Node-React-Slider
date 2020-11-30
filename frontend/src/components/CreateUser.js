import React, {useState} from 'react';
import axios from 'axios'

function CreateUser({history}) {
    const [state, setState] = useState({firstName:'', lastName:'', emailAddress:'',
     login:false, register:true, errors:{}})

  const handleChange =(e)=>{
    const {value, name} = e.target;
    setState(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const setLogin = () => {
      setState(prevState => ({
          ...prevState,
          login:true,
          register:false,
          firstName:'',
          lastName:'',
          emailAddress:'',
          errors:{}
      }))
  }

  const setRegister = () => {
    setState(prevState => ({
        ...prevState,
        login:false,
        register:true,
        firstName:'',
        lastName:'',
        emailAddress:'',
        errors:{}
    }))
}

  const handleSubmit = async(e) => {
    e.preventDefault();
    const postObject = {
      firstName: state.firstName,
      lastName: state.lastName,
      emailAddress: state.emailAddress,
    }
    try {
      const response = await axios.post('http://localhost:5000/create-user/', postObject )
      console.log(response)
    } catch (e) {
        const errors = {...state.errors}
        errors['login'] = e.response.data['message']
        setState(prevState => ({
          ...prevState,
          errors
        }))

    }
  }

  const handleLogin = async(e) => {
      e.preventDefault();
    const userObject = {
        emailAddress: state.emailAddress,
        firstName:state.firstName,
    }
    try {
        const response = await axios.post('http://localhost:5000/login', userObject)
        console.log(response)
        const mainDiv = document.querySelector('.register-user')
        // const pageDiv = document.querySelector('.create-post')
        // console.log(pageDiv)
        mainDiv.classList.add('swipe')
        setTimeout(() => {
          history.push('/create')
          // pageDiv.classList.add('swiper')
        }, 1500)
    } catch (e) {
      const errors = {...state.errors}
      errors['login'] = e.response.data['message']
      setState(prevState => ({
        ...prevState,
        errors:errors
      }))
    }

  }
    return (
        <div className='register-user'>
            <div className={state.register ? 'register show' : 'register'}>
            <h5>Register your account</h5>
          <form onSubmit={handleSubmit}>
          {state.errors.login && <div className='login-error'>
                <i className='fa fa-lock'/>
                <p>{state.errors.login}</p>
              </div>}
            <input required onChange={handleChange} name='firstName' value={state.firstName} type='text' placeholder='first Name'/>
            <input required onChange={handleChange} name='lastName' value={state.lastName} type='text' placeholder='Last Name'/>
            <input required onChange={handleChange} name='emailAddress' value={state.emailAddress} type='email' placeholder='Email Address'/>
            <button  type='submit'>create</button>
          </form>
        <div className='account-login'>
            <p>already have an account? </p>
            <span onClick={setLogin}>Login</span>
        </div>
        </div>
        <div className={state.login ? 'login show' : 'login'}>
        <h5>Login to your account</h5>
        <form onSubmit={handleLogin}>
            {state.errors.login && <div className='login-error'>
                <i className='fa fa-lock'/>
                <p>{state.errors.login}</p>
              </div>}
            <input required onChange={handleChange} name='firstName' value={state.firstName} type='text' placeholder='first Name'/>
            <input required onChange={handleChange} name='emailAddress' value={state.emailAddress} type='email' placeholder='Email Address'/>
            <button type='submit'>login</button>
          </form>
          <div className='account-login'>
            <p>New to our web? </p>
            <span onClick={setRegister}>Register</span>
        </div>
        </div>
          </div> 
    );
}

export default CreateUser;

