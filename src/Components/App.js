import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./Navigation.js";
import LandingPage from "./Landing.js";
import SignUpPage from "./SignUp.js";
import SignInPage from "./SignIn.js";
import PasswordForgetPage from "./PasswordForget.js";
import HomePage from "./Home.js";
import AccountPage from "./Account.js";

import * as routes from "../constants/routes.js";
import {firebase} from "../firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({authUser}))
        : this.setState(() => ({authUser: null}));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />

          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
