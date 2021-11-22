import React, { Component } from 'react';
import './marker.css';

export default class Marker extends Component {
  render() {
    let classes = 'marker';
    if (this.props.selectedHomestay) {
      classes += ' selected';
    }
    return (
      <div className={classes}>
        <div className="marker-content">{this.props.homestay.harga}K</div>
      </div>
    );
  }
}
