import React from "react";
import PropTypes from 'prop-types';
import "./signup.scss";
import { Link } from "react-router-dom";

import Notification from "./notification.js";

const Signup = (props) => {
  return (
    <div className="Signup">
      <Notification text={props.notificationText} error={props.error} />
      <h2>Signup</h2>
      <form action="/post-signup" method="POST" acceptCharset="utf-8">
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Email: <input type="password" name="email" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <label>
          Confirm Password: <input type="password" name="confirm_password" />
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
      <br />
      <p>Already a member?</p>
      <Link to="/login" id="login_link">
        Login
      </Link>
    </div>
  );
};

Signup.propTypes = {
  notificationText: PropTypes.string,
  error: PropTypes.string,
};
export default Signup;
