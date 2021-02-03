import Home from "./components/Home";
import FavoriteJobs from "./components/FavoriteJobs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={FavoriteJobs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
