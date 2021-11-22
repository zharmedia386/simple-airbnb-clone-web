import React, { Component } from 'react';
import Marker from './components/marker';
import Homestay from './components/homestay';
import GoogleMapReact from 'google-map-react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
      allHomestays: [],
      selectedHomestay: null,
      seacrh: '',
    };
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          homestays: data,
          allHomestays: data,
        });
      });
  }
  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay: homestay,
    });
  };
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      homestays: this.state.allHomestays.filter((homestay) => new RegExp(event.target.value, 'i').exec(homestay.nama)),
    });
  };
  render() {
    let center = {
      lat: -7.795424,
      lng: 110.371754,
    };
    if (this.state.selectedHomestay) {
      center = {
        lat: this.state.selectedHomestay.lat,
        lng: this.state.selectedHomestay.lng,
      };
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search..." onChange={this.handleSearch} />
          </div>
          <div className="homestays">
            {this.state.homestays.map((homestay) => {
              return <Homestay homestay={homestay} selectHomestay={this.selectHomestay} />;
            })}
          </div>
        </div>
        <div className="peta">
          <GoogleMapReact center={center} zoom={15}>
            {this.state.homestays.map((homestay) => {
              return <Marker lat={homestay.lat} lng={homestay.lng} homestay={homestay} selectedHomestay={homestay === this.state.selectedHomestay} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
