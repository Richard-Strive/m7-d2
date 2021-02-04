import React, { useState, useEffect } from "react";

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
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./FavoriteJobs.css";

const mapStateToProps = (state) => state;

function FavoriteJobs(props) {
  const likedArray = props.fav.liked;
  const jobListArray = props.jobList;

  let favObjArray = [];

  const populatefavObjArray = () => {
    for (let i = 0; i < likedArray.length; i++) {
      favObjArray.push(jobListArray.find((job) => job.id === likedArray[i]));
    }
  };
  //MY POPULATE FN LOL

  populatefavObjArray();

  console.log(favObjArray);

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
        {favObjArray.length > 0 ? (
          favObjArray.map((job) => (
            <>
              {console.log(job)}
              <div className="text-center">RESULTS FOR {`${job.location}`}</div>
              <Row>
                <div className="favorite_header">
                  <span className="ml-2">
                    <b>{`${job.company}`}</b>
                  </span>
                  <br />
                  <div className="ml-2">{job.type}</div>
                </div>
              </Row>
              <div className="favorite_infos">
                <b className="ml-3">{`${job.title}`}</b>
                <p className="ml-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  ></div>
                </p>
              </div>
            </>
          ))
        ) : (
          <h1 className="text-white">NOTHING HERE </h1>
        )}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(FavoriteJobs);
