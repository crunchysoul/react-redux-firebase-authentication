import React from "react";
import {connect} from "react-redux";
import {compose} from "recompose";
import {PasswordForgetForm} from "./PasswordForget.js";
import PasswordChangeForm from "./PasswordChange.js";
import withAuthorization from "./withAuthorization.js";

const AccountPage = ({authUser}) => (
  <div>
    <h1>Accout: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const mapStateToProps = state => ({authUser: state.sessionState.authUser});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps),
)(AccountPage);
