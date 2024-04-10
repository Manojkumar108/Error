import  { useState } from 'react';
import {Button,Input} from '@chakra-ui/react'

const Login = () => {
  const [user, setUser]= useState({
    email:"",
    password:"",

  });
  const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }

  const handelSubmit  =(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    
    <>
   <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/img2.jpg" alt="donation ing" width="400" height="400" />
            </div>
            {/* Login */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              <form action="" onSubmit={handelSubmit}>
                
                <div>
                  <label htmlFor="email">email</label>
                  <Input type="email" name="email" id="email" placeholder='enter your email' required  autoComplete='off'
                  value={user.email}
                  onChange={handelInput}/>
                </div>
               
                <div>
                  <label htmlFor="password">password</label>
                  <Input type="password" name="password" id="password" placeholder='enter password'
                  value={user.password}
                  onChange={handelInput} />
                </div>
                <br />
                <Button type="submit" className='btn btn-submit'>Log In </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login;