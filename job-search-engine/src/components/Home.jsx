import React, { Component } from "react";
import ClickedJob from "./ClickedJob";

import JobList from "./JobList";

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Col,
  Spinner,
} from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

//cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin
//https://jobs.github.com/positions.json?description={POSITION}&location={LOCATION}

export default class Home extends Component {
  state = {
    title: "",
    location: "",
    jobList: [],
    loader: true,
    selectedJob: null,
  };

  getResults = async (location, title) => {
    try {
      const response = await fetch(
        `https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${title}&location=${location}`
      );
      const data = await response.json();
      if (response.ok) {
        this.setState({
          ...this.state,
          jobList: data,
          loader: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSelectedJob = (id) => {
    this.setState({
      ...this.state,
      selectedJob: this.state.jobList.find((job) => job.id === id),
    });
  };

  handleTitle = (e) => {
    this.setState({
      ...this.state,
      title: e.target.value,
    });
  };

  handleLocation = (e) => {
    this.setState({
      ...this.state,
      location: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getResults(this.state.title, this.state.location);
  };
  // getResults(this.state.location, this.state.position);

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" className="home_nav_items">
          <div>
            <Navbar.Brand href="#home">
              <GitHubIcon className="text-white mb-1" />{" "}
              <span className="text-white">Jobs</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline onSubmit={this.handleSubmit}>
                <FormControl
                  type="text"
                  placeholder="Choose the title"
                  value={this.state.title}
                  className="mr-sm-2"
                  onChange={this.handleTitle}
                />
                <FormControl
                  type="text"
                  placeholder="Choose the location"
                  value={this.state.location}
                  className="mr-sm-2"
                  onChange={this.handleLocation}
                />
                <Button type="Submit" variant="success">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Container className="the_container">
          <div>
            {this.state.jobList.length < 1 ? (
              <h1 className="text-center mt-5 text-white fake-loader">
                Select a title or a location{" "}
              </h1>
            ) : (
              this.state.jobList.map((job, index) => (
                <JobList
                  {...job}
                  key={index}
                  selectedJob={this.handleSelectedJob}
                />
              ))
            )}
          </div>
          <div className="mt-3 ">
            {this.state.selectedJob && (
              <ClickedJob singleJob={this.state.selectedJob} />
            )}
          </div>
        </Container>
      </>
    );
  }
}
