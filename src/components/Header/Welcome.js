import React from "react";

import "./Welcome.css";

import CartSvg0 from "../../assets/images/credit-card-svgrepo-com(0).svg";
import CartSvg1 from "../../assets/images/credit-card-svgrepo-com(1).svg";
import CartSvg2 from "../../assets/images/credit-card-svgrepo-com(2).svg";
import CartSvg3 from "../../assets/images/credit-card-svgrepo-com(3).svg";
import CartSvg4 from "../../assets/images/credit-card-svgrepo-com(4).svg";
import CartSvg5 from "../../assets/images/credit-card-svgrepo-com(5).svg";
import CartSvg6 from "../../assets/images/credit-card-svgrepo-com(6).svg";
import CartSvg7 from "../../assets/images/credit-card-svgrepo-com(7).svg";
import CartSvg8 from "../../assets/images/credit-card-svgrepo-com(8).svg";
import CartSvg9 from "../../assets/images/credit-card-svgrepo-com(9).svg";

const Welcome = ({ element }) => {
  return (
    <main>
      <div className="context">
        <h1>کانتنت مهم اینجا</h1>{" "}
      </div>

      <div ref={element} className="area">
        <ul className="circles">
          <li>
            <img src={CartSvg0} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg1} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg2} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg3} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg4} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg5} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg6} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg7} alt="logofly" className="logo--fly" />
          </li>
          <li>
            <img src={CartSvg8} alt="logofly" className="logo--fly" />
          </li>

          <li>
            <img src={CartSvg9} alt="logofly" className="logo--fly" />
          </li>
          <li></li>
        </ul>
      </div>
    </main>
  );
};

export default Welcome;
