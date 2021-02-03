import React, { useState } from "react";

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Col,
  Spinner,
  Row,
  Card,
  Container,
} from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import "./FavoriteJobs.css";

function FavoriteJobs() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="home_nav_items">
        <div>
          <Navbar.Brand href="#home">
            <Link to="/" className="link_style">
              <GitHubIcon className="text-white mb-1" />{" "}
              <span className="text-white">Home</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div></div>
      </Navbar>
      <div className="favorite_info_container">
        <div className="text-center">RESULTS FOR TESTING </div>
        <Row>
          <div className="favorite_header">
            {/* <img className="company_logo" src={company_logo} alt=" " /> */}
            <span className="ml-2">
              <b>testing company name</b>
            </span>
          </div>
        </Row>
        <div className="favorite_infos">
          <b className="ml-3">Testing</b>
          <p className="ml-3">
            Testing description
            {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
          </p>
        </div>
      </div>
    </>
  );
}

export default FavoriteJobs;
