import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

//cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin
//https://jobs.github.com/positions.json?description={POSITION}&location={LOCATION}

// const getResults = async () => {
//   try {
//     const response = await fetch(
//       " https://cors--anywhere.herokuapp.com//https://jobs.github.com/positions.json?description=frontend&location=berlin",
//       {
//         method: "GET",
//         mode: "no-cors",
//       }
//     );
//     console.log(await response.json());
//   } catch (error) {
//     console.log(error);
//   }
// };

const getResults = async () => {
  try {
    const response = await fetch(
      " https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin"
    );
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

export default class Home extends Component {
  componentDidMount() {
    getResults();
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg" className="home_nav_items">
        <div>
          <Navbar.Brand href="#home">
            <GitHubIcon className="text-white" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Choose the position"
                className="mr-sm-2"
              />
              <FormControl
                type="text"
                placeholder="Choose the location"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
