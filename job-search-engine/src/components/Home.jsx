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
  Spinner,
  Col,
  Toast,
} from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleLovedJob: (id) =>
    dispatch({
      type: "ADD_FAVORITE",
      payload: id,
    }),

  handleDeleteLovedJob: (id) =>
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    }),

  handleToggleShow: () =>
    dispatch({
      type: "TOGGLE_SHOW",
    }),

  firstAsyncFetch: (location, title) => {
    dispatch(async (dispatch, getState) => {
      const response = await fetch(
        `https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${title}&location=${location}`
      );
      const data = await response.json();

      console.log("I'M THE REDUX FETCH DATA--->", data);
      console.log("THIS IS MY STATE", getState());

      if (response.ok) {
        dispatch({
          type: "GET_DATA",
          payload: data,
        });
      } else {
        console.log("SOMETHING WHEN WRONG ON YOUR REDUX ASYNC FETCH");
      }
    });
  },
});

//cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin
//https://jobs.github.com/positions.json?description={POSITION}&location={LOCATION}

class Home extends Component {
  state = {
    title: "",
    location: "",
    jobList: [],
    loader: true,
    selectedJob: null,
  };

  // getResults = async (location, title) => {
  //   try {
  //     const response = await fetch(
  //       `https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${title}&location=${location}`
  //     );
  //     const data = await response.json();
  //     if (response.ok) {
  //       this.setState({
  //         ...this.state,
  //         jobList: data,
  //         loader: false,
  //       });
  //       this.props.handleData(this.state.jobList);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //PREV FETCH METHOD REPLACED BY REDUX ONE!!!

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
    this.props.firstAsyncFetch(this.state.title, this.state.location);
    console.log(this.props.jobData);
  };
  // getResults(this.state.location, this.state.position);

  // componentDidMount() {
  //   console.log(this.props);
  //   console.log(this.state.jobList);
  // }

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
        <Col xs={6}>
          <Toast
            className="my_toast"
            show={this.props.fav.showA}
            onClose={() => this.props.handleToggleShow()}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">New item liked</strong>
            </Toast.Header>
            <Toast.Body>
              <Link
                className="link_style_toast"
                to="/favourites"
                onClose={() => this.props.handleToggleShow()}
              >
                Checkout your liked jobs here
              </Link>
            </Toast.Body>
          </Toast>
        </Col>

        <Container className="the_container">
          <div className="listed_jobs">
            {this.props.jobData.length < 1 ? (
              <h1 className="text-center mt-5 text-white fake-loader">
                Select a title or a location{" "}
              </h1>
            ) : (
              this.props.jobData.jobs.map((job, index) => (
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
              <ClickedJob
                singleJob={this.state.selectedJob}
                jobList={this.state.jobList}
              />
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
