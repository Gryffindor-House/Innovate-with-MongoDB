import React from "react";
import { Container,VStack } from '@chakra-ui/react'


function About() {
  return (
    <VStack>
    <Container maxW='xl' centerContent>
      <box>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>What do we offer?</h3>
              <p>This weather app is one of best free weather apps with full features: Local weather, weather map (weather map service) and weather widgets.
                  Forecastle: Forecast now, hourly forecast and daily forecast app
                  Widgets for Android: The weather radar widget free and clock widget weather with beautiful style.
                  Weather map, weather radar map: Local weather radar app free with a lot of radar scope: Rain/snow, temperature, pressure, windy, clouds, humidity, waves, … and storm radar.</p>
            </div>
          </div>
        </div>
      </box>
    </Container>
    </VStack>
  );
};

export default About;
