import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY } from '../../config/googlemaps';

const style = {
  maxWidth: '1000px',
  height: '600px',
  overflowX: 'hidden',
  overflowY: 'hidden',
};
const containerStyle = {
  maxWidth: '1000px',
  height: '600px',
};
export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
        initialCenter={{
          lat: '13.045812998652254',
          lng: '80.25544339744059',
        }}
      >
        <Marker
          position={{
            lat: '13.045812998652254',
            lng: '80.25544339744059',
          }}
        />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GoogleMap);
