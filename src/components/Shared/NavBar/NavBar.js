import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import useAuth from "../../../hooks/useAuth";
// import { Link } from "react-router-dom";
import { BiCart } from 'react-icons/bi';
import { useSelector } from "react-redux";
const NavBar = () => {
  //   const { user, admin, logOut } = useAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const cart = useSelector((state) => state.cart);
  console.log(cart.cardItem)
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className=" pb-2 nav-logo text-left d-flex">
          <div className="nav-name">EmiratLifeStyle</div>
        </NavLink>
        <ul
          id="item-container"
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}

            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/cart"
              activeClassName="active"
              className="nav-links cart-icon"
              onClick={handleClick}
            >
              <div className='cart'>
                <p className='cart-item'>{
                  cart.cardItem?.length
                }</p>
                <BiCart className='cart-icon' />


              </div>
            </NavLink>
          </li>

          {/* {admin === true ? (
            <li className="nav-item">
              <NavLink
                to="/admindashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                className="menu-name"
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            user?.email && (
              <li className="nav-item">
                <NavLink
                  to="/userdashboard"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  className="menu-name"
                >
                  Dashboard
                </NavLink>
              </li>
            )
          )} */}

          {/* <li className="nav-item ">
            {user.email ? (
              <Nav.Link>
                <button className="btn btn-danger" onClick={logOut}>
                  LOGOUT
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-danger">LOGIN</button>
              </Nav.Link>
            )}
          </li>
          <li className="user-name">{user?.displayName}</li> */}
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
