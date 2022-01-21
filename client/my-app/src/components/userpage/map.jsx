import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY } from '../../config/googlemaps';

const style = {
  maxWidth: "450px",
  height: "350px",
  overflowX: "hidden",
  overflowY: "hidden"
 };
 const containerStyle = {
  maxWidth: "300px",
  height: "300px"
 };
export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style} containerStyle={containerStyle}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GoogleMap);
