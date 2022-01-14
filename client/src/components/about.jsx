import React, { Component } from "react";

function About () {
    return(
     <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>What do we offer?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>Weather app. Ashwin is an awesome ML expert who is too good for this world. His college mates are shits except Thomas who is amazing. </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>By Team Cringans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
}

export default About;