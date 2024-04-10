import React from 'react'
import { NavLink } from 'react-router-dom'
import {Text} from '@chakra-ui/react'

const Error = () => {
  return (
    <>
    <section id="error-page">
        <div className=" content">
            <h2 className="header">404</h2>
            <h4 className='main-heading'>Sorry!!! page not found</h4>
            <Text ml='40px' color="red.500">Sorry!! page not found</Text>
           
            <p>
                Oops ! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta.
            </p>
            <div className="btns">
                <NavLink to="/"><button>Return Home</button> </NavLink>
                <NavLink to="/contact"><button>report problem</button></NavLink>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error