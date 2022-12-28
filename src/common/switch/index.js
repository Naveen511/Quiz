/*
 * Thes file contains the code for switch option in main page
 */
import React, { Component } from "react";
import "./styles.css";

const ToggleSwitch = () => {

  /**
   * Handles the action when switch is triggered
   * @param {}
   */
  const handleChange = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" onChange={() => handleChange()} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
