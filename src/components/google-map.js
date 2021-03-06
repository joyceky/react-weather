import React, { Component } from 'react';

class GoogleMap extends Component {
// this is a lifecycle method called after the component renders
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />
  }
}

export default GoogleMap;
