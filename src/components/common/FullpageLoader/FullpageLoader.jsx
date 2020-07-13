import React from "react";
import "./FullpageLoader.scss";
import useBodyClass from "../../../hooks/useLoader";

const FullpageLoader = () => {
  useBodyClass(["modal-open"]);

  return (
    <div className="loader-mask">
      <div className="loader-container">
        <div className="holder">
          <div className="box"></div>
        </div>
        <div className="holder">
          <div className="box"></div>
        </div>
        <div className="holder">
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default FullpageLoader;
