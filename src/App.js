import React, { Component } from "react";
import Home from './components/Home';
import Sprites from "./components/Sprites";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:pokeName' component={Sprites} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
