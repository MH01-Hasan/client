// import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  // FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import "./Footer.css";

const Footer = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     axios
  //       .post("https://shrouded-headland-44423.herokuapp.com/emailSub", data)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           reset();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your Email has been saved",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         } else {
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "error",
  //             title: "Your Email has been not saved",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });
  //   };
  //   const admin = useSelector((state) => state.admin.admin);
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3>Reach Us</h3>
            </div>
            <ul className="reach-us">
              <li>
                <a rel="noreferrer" target="_blank" href="tell:01629094984">
                  <FaPhone />
                  +9710568775565
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:support@gmail.com"
                >
                  <FaEnvelope />
                  mrisiddik9@gmail.com
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />
                Al Jabeer Building 301, Al Jurf 3, Ajman
              </li>
              <li className="spical">
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3>Useful Links</h3>
            </div>
            <ul className="footer-menu">
              <Link className="footer-item" to="/login">
                Admin Login
              </Link>
            </ul>
          </Col>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3>Working Day</h3>
            </div>
            <ul className="working">
              <li>
                <span>Monday-Saturday</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="foot-note">
              Copyright 2022 @emirateslifestyles All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
