import React from "react";
import { useNavigate } from "react-router-dom";
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
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Sign In</h2>
                <p>
                  Login to our Comprehensive Weather App Dashboard!
                </p>
              </div>
              <form name='sentMessage' validate>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                      />
                      <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-group'>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        className='form-control'
                        placeholder='Enter Password'
                        required
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Sign In
                </button>
                <GoogleButton onClick={handleGoogleSignIn} />
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Reach Out</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
              </p>
              Chennai, Tamil Nadu
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-github'></i> Github Organisation
                </span>
              </p>
              Gryffindor-House
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>
              </p>
              covibuddy@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
