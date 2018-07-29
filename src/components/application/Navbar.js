import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import compass from "./../../assets/images/utility/compass.png";
import menuIcon from "./../../assets/images/utility/menu-icon.svg";
import "./Navbar.css";

$(() => {
  $("#menu").click(() => {
    $("#options").slideToggle("fast");
  });
  $("#options").click(() => {
    $("#options").hide();
  });
});

const Navbar = () => (
  <Fragment>
    <style>
      {`
      .navbar{
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
        font-size: calc(4px + 1.3vw);
        width: 100%;
        height: 80px;
        background: white;
        text-align: center;
        position: fixed;
        z-index: 100;
        transition: top 0.2s ease-in-out;
        top: 0;
        left: 0;
      }

      .navbar a, #logo {
        color: #101010;
        text-decoration: none;
        line-height: 80px;
      }
      #logo{
        font-size: 150%;
      }
      .navbar a:hover:not(#logo){
        text-shadow: 0px 0px 25px dodgerblue;
      }

      #compass{
        vertical-align: middle;
        width: 60px;
        height: 60px;
      }

      {/* smaller screen styles */}

      @media(max-width: 900px){
        #logo{
          font-size: 24px;
        }
      }

      @media(max-width: 700px){
        .navbar{
          display: none;
        }
        #menu{
          display: block;
        }
      }
      @media(min-width: 701px){
        #options{
          display: none !important;
        }
      }
      #options{
        margin-top: 70px;
      }
      .nav{
        display: none;
        padding: 0px;
        margin: 0px;
        width: 100%;
        min-height: 70px;
        height: max-content;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
      }
      .nav:hover{
        cursor: pointer;
      }
      .nav div{
        opacity: .8;
        width: 100%;
        height: 70px;
        text-align: center;
        line-height: 70px;
        background-color: white;
      }
      .nav a{
        font-size: 220%;
        text-decoration: none;
        color: inherit;
      }
      .nav div:hover:not(#menu-btn){
        box-shadow: inset 6px 0 0 0 dodgerblue;
      }

      #menu-icon{
        width: 50px;
        height: 50px;
        vertical-align: middle;

      }
    `}
    </style>
    <div className="navbar">
      <div>
        <Link to="/about">ABOUT</Link>
      </div>
      <div className="dropdown">
        <Link className="dropdown-btn" to="/practice">
          PRACTICE
        </Link>
        <div className="dropdown-menu">
          <Link to="/classes">Classes</Link>
          <Link to="/photography">Album</Link>
          <Link to="/retreats">Retreats</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>
      <div>
        <Link id="logo" to="/">
          NATALI'S <img id="compass" alt="compass" src={compass} /> JOURNEY
        </Link>
      </div>
      <div>
        <Link to="/photography">ALBUM</Link>
      </div>
      <div>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>

    <div className="nav" id="menu">
      <div id="menu-btn">
        <img id="menu-icon" alt="menu-button" src={menuIcon} />
      </div>
    </div>

    <div className="nav" id="options">
      <Link to="/">
        <div id="home">HOME</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/practice">
        <div>PRACTICE</div>
      </Link>
      <Link to="/photography">
        <div>ALBUM</div>
      </Link>
      <Link to="/contact">
        <div>CONTACT</div>
      </Link>
    </div>
  </Fragment>
);

export default Navbar;
