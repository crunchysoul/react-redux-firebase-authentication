import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

import {auth, db} from "../firebase";
import * as routes from "../constants/routes";

const SignUpPage = ({history}) => (
  <div>
    <h1>Sign Up Page</h1>
    <SignUpForm history={history} />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const byPropKey = (propName, propValue) => () => ({
  [propName]: propValue,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  onSubmit = event => {
    const {username, email, passwordOne} = this.state;

    const {history} = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db
          .doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(...INITIAL_STATE);
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const {username, email, passwordOne, passwordTwo, error} = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Full Name"
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
        />
        <input
          type="text"
          value={email}
          placeholder="Email Address"
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
        />
        <input
          type="text"
          value={passwordOne}
          placeholder="Password"
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
        />
        <input
          type="text"
          value={passwordTwo}
          placeholder="Confirm Password"
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
        />
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export {SignUpForm, SignUpLink};
