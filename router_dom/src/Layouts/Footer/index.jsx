import React from "react";
import './index.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="left_side">
            <h3>Other Pages</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Shortcodes</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Languages</a>
              </li>
            </ul>
          </div>
          <div className="right_side">
            <div>
              <img
                src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png"
                alt=""
              />
              <p>
                Awesome and completely free WordPress WooCommerce themes to take
                your ecommerce website to the next level. If you are having
                problems with theme setup, please feel free to use Colorlib
                support forum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
