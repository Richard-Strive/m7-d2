import React, { useState } from "react";
import Home from "./components/Home";
import FavoriteJobs from "./components/FavoriteJobs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  console.log(data);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home handleData={handleData} />}
          />
          <Route
            exact
            path="/favourites"
            render={() => <FavoriteJobs jobList={data} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
