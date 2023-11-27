import React from "react";
import { NavLink } from "react-router-dom";
import './index.scss'
const Navbar = () => {
  return (
    <div id="navbar">
      <div className="container">
        <div className="row">
          <div className="nav_left col-12 col-md-6">
            <NavLink to='/'>
              <h4 className="nav_logo">Dazzling Demo</h4>
            </NavLink>
          </div>
          <div className="nav_right col-12 col-md-6">
            <ul className="d-flex">
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/languages'>Languages</NavLink>
              </li>
              <li>
                <NavLink to='/shop'>Shop</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Log In</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
