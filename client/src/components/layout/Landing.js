import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../../App.css";

const Landing = ({ isDoctorAuthenticated, isUserAuthenticated }) => {
  if (isDoctorAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else if (isUserAuthenticated) {
    return <Redirect to="/appointment" />;
  }

  return (
    <Fragment>
      <section id="landing">
        <div className="container">
          <div className="heading">
            <h1 className="main-heading">Find Your Best Doctor &</h1>
            <h1 className="main-heading">
              Book Your <span className="main-span">Appointment.</span>
            </h1>
          </div>
          <div className="signup">
            <div className="doctor-signup">
              <h2 className=" item heading-sub">
                <strong>For Doctors</strong>
              </h2>
              <p className="item description">
                Click "Sign Up" and select "Doctor" as user type Provide basic
                and professional information Choose appointment scheduling
                timings to set availability. Start managing appointments of
                patients.
              </p>
              <Link
                to="/registerDoctor"
                type="button"
                className="item btn btn-info"
              >
                Sign Up
              </Link>
            </div>
            <div className="user-signup">
              <h2 className="item heading-sub">
                <strong>For Users</strong>
              </h2>
              <p className="item special description">
                Click the "Sign Up" button below. Provide your basic
                information, such as your name, email address, and password. you
                can start using the app to search for doctors, book
                appointments, and manage your appointments.
              </p>
              <Link to="/registerUser" className="item btn btn-outline-info">
                Sign Up
              </Link>
            </div>
          </div>
          <br />
          <div className="img">
            <div className="img-1">
              <img src={require("../../img/undraw_doctor_kw5l.svg")} />
            </div>
          </div>
        </div>
        <br />
      </section>
    </Fragment>
  );
};
Landing.propTypes = {
  isDoctorAuthenticated: PropTypes.bool.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps)(Landing);
