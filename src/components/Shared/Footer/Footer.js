import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="foofont">
        <Row className="text-center">
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3 className="h">Reach Us</h3>
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
                  href="mailto:emirateslifestyles@yahoo.com"
                >
                  <FaEnvelope />
                  emirateslifestyles@yahoo.com
                </a>
              </li>
              <li className="spical">
                <a
                  href="https://www.facebook.com/emirates.lifestyle"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/message/RVYZNEVGF4FAM1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/emirateslifestyles"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3 className="h">Useful Links</h3>
            </div>
            <ul className="footer-menu">
              <Link className="footer-item" to="/AboutUs">
                About Us
              </Link>
            </ul>
            <ul className="footer-menu">
              <Link className="footer-item" to="/ExchangePolicy">
                Shipping and Exchange Policy
              </Link>
            </ul>
          </Col>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3 className="h">Shipping Days</h3>
            </div>
            <ul className="working">
              <li>
                <span>Saturday-Thursday</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Friday</span>
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
