import React, { Component } from "react";
import "./sidenav.css"; // Importing the CSS file
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

class SideNav extends Component {
  render() {
    return (
      <>
        <div className="holder">
          <div className="sidenav">
            <div className="icon-holder">
              <IoMdHome className="icon" />
              <p>Home</p>
            </div>

            <div className="icon-holder">
              <RxDashboard />
              <p>Dashboard</p>
            </div>
            <div>
              <h4>Services</h4>
              <p>Airports</p>
              <p>Videos</p>
            </div>
            <div>
              <h4>Others</h4>
              <p>List 1</p>
              <p>List 2</p>
              <p>List 3</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SideNav;
