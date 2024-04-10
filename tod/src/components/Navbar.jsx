import { NavLink } from "react-router-dom";
import './navbar.css';
export const Navbar = ()=>{
  return(
    <>
    <header>
      <div className="container_nav">
        <div className="logo">
          <NavLink to="/">ThreadsOfHope</NavLink>


        </div>
        <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink> </li>
          <li> <NavLink to="/about">About</NavLink> </li>
          <li><NavLink to="/contact">contact</NavLink></li>
          <li><NavLink to="/registration">Registration</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
      </div>
      
    </header>
    </>
  )

}