import React, { Component } from 'react';
import './homestay.css';

export default class Homestay extends Component {
  handleClick = () => {
    this.props.selectHomestay(this.props.homestay);
  };
  render() {
    let judul = `${this.props.homestay.nama} - Rp${this.props.homestay.harga}K`;
    let foto = {
      backgroundImage: `url('${this.props.homestay.fotoUrl}')`,
    };
    return (
      <div className="homestay" onClick={this.handleClick}>
        <div className="homestay-foto" style={foto}></div>
        <div className="homestay-judul">{judul}</div>
      </div>
    );
  }
}
