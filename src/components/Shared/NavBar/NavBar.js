import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
const NavBar = () => {
  const { user, admin, logOut } = useAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className=" pb-2 nav-logo text-left d-flex">
          <div className="nav-name">Emirates LifeStyles</div>
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
              className="menu-name"
            >
              Home
            </NavLink>
          </li>
          {admin === true ? (
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                className="menu-name"
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink
                to="/MyOrder"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                className="menu-name"
              >
                My Order
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              exact
              to="/cart"
              activeClassName="active"
              className="nav-links cart-icon"
              onClick={handleClick}
              className="menu-name"
            >
              <div className="cart">
                <p className="cart-item">{cart.cardItem?.length}</p>
                <BiCart className="cart-icon" />
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            {user.email ? (
              <Nav.Link>
                <button className="btn btn-primary" onClick={logOut}>
                  LOGOUT
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-primary">LOGIN</button>
              </Nav.Link>
            )}
          </li>
          <li className="user-name">{user?.displayName}</li>
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
