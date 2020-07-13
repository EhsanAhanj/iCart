import React from "react";
import "./Fab.css";
const Fab = (props) => {
  return (
    <div className="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
      <label className="fab" htmlFor="fabCheckbox">
        <span className="fab-dots fab-dots-1"></span>
        <span className="fab-dots fab-dots-2"></span>
        <span className="fab-dots fab-dots-3"></span>
      </label>
      <div className="fab-wheel">
        <a href="/#" className="fab-action fab-action-1">
          <i className="icon-user"></i>
        </a>
        <a href="/#" className="fab-action fab-action-2">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/#" className="fab-action fab-action-3">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/#" className="fab-action fab-action-4">
          <i className="fa fa-telegram"></i>
        </a>
      </div>
    </div>
  );
};

export default Fab;
