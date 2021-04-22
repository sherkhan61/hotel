import React, { Component } from "react";
import logo from "../logo.svg";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="nav-btn"
              type="button"
              onClick={this.handleToggle}
            >
              <FaGripLines className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/rooms"> Rooms </Link>
            </li>
          </ul>
          <div className="nav-phone">
            <a href="tel:+77771512525">
              +77771512525
              <span>Toll Free & 24/7 Available</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
