import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <img
        className="img-fluid"
        src="https://i.ibb.co/Zc7WBXx/404.jpg"
        alt=""
      />
      <br />
      <Link to="/">
        <button className="btn btn-primary mt-3 mb-5">
          Go Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
