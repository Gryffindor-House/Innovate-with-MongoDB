import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import GoogleButton from "react-google-button";

function LoginForm() {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      console.log("Logged In");
      navigate("/user");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Sign In</h2>
              </div>
              <form name="sentMessage" validate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="username"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="enter password"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Sign In
                </button>
              </form>
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
