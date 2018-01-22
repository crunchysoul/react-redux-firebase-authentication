import React from "react";
import PropTypes from "prop-types";
import {PasswordForgetForm} from "./PasswordForget.js";
import PasswordChangeForm from "./PasswordChange.js";
import withAuthorization from "./withAuthorization.js";

const AccountPage = (props, {authUser}) => (
  <div>
    <h1>Accout: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
