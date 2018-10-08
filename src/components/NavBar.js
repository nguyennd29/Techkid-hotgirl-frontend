import React, { Component } from 'react';
import SearchField from './SearchField';
import ProfilePanel from './ProfilePanel';
// import logo from '../img/logo.png';
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
        <SearchField onSearchChanged = {this.props.onSearchChanged} />
        {/* <div className="col-6">
        <img src={logo} />
        </div> */}
        <ProfilePanel/>
        </div>
      </div>

    );
  }
}

export default NavBar;