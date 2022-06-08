import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
                  +971568775565
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:support@gmail.com"
                >
                  <FaEnvelope />
                  emirateslifestyles@yahoo.com
                </a>
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
