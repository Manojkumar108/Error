import React, { useState } from 'react';
import axios from 'axios'

// import './registration.css';

const Registration = () => {
  const [user, setUser]= useState({
    name:"",
    email:"",
    phone:"",
    address: {
      state: "",
      city: "",
      pin: ""
    },
    password:""

  });

  //inputs 
  const handelInput =(e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    // const {name ,value} = e.target;

    setUser(prevState=>({
      ...prevState,
      [name]:value
    }))

    
  }
  //handel input change for address
  const handelAddress=(e)=>{
    const {name,value}=e.target;
    setUser(prevState=>({
      ...prevState,
      address:{
        ...prevState.address,
        [name]:value
      }
    }))
  }


   //handle the form submission
    const handelSubmit =async(e)=>{
      e.preventDefault();
      // alert(user);
      console.log(user);
      try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`,user,{
        
        headers:{
          "Content-Type": "application/json"
        }
      })
      console.log(response);
      } catch (error) {
        console.log("register error",error);
      }
      
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
            {/* registration form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />
              <form action="" onSubmit={handelSubmit}>
                <div>
                  <label htmlFor="name">username</label>
                  <input type="text" name="name" id="name" placeholder='name' required  autoComplete='off'
                  value={user.name}
                  onChange={handelInput}/>
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" id="email" placeholder='enter your email' required  autoComplete='off'
                  value={user.email}
                  onChange={handelInput}/>
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" id="phone" placeholder='enter phone number' required  autoComplete='off'
                  value={user.phone}
                  onChange={handelInput}/>
                </div>
                <div>
                  <label htmlFor="state">state</label>
                  <input type="text" name="state" id="state" placeholder='Enter State' required  autoComplete='off'
                  value={user.address.state}
                  onChange={handelAddress}/>
                </div>
                <div>
                  <label htmlFor="city">city</label>
                  <input type="text" name="city" id="city" placeholder='Enter city' required  autoComplete='off'
                  value={user.address.city}
                  onChange={handelAddress}/>
                </div>
                <div>
                  <label htmlFor="pin">pin</label>
                  <input type="text" name="pin" id="pin" placeholder='Enter pin' required  autoComplete='off'
                  value={user.address.pin}
                  onChange={handelAddress}/>
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" id="password" placeholder='enter password'
                  value={user.password}
                  onChange={handelInput} />
                </div>
                <br />
                <button type="submit" className='btn btn-submit'>register </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Registration;