import React, { useState, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo_white.svg";
import "../style/Header.css";

function Header({ accepted, show, width, height }) {
  return (
    <div
      className="header__section"
      style={
        accepted ? { backgroundColor: "#076191" } : { backgroundColor: "#fff" }
      }
    >
      <div className="logo__section">
        <img className="image" src={accepted ? logoWhite : logo} />
      </div>
    </div>
  );
}

export default Header;
