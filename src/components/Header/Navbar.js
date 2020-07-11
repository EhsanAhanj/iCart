import React from "react";
import "./Navbar.css";
import LogoSolo from "../../assets/images/logosolo.svg";
import TextLogo from "../../assets/images/textlogo.svg";

const Navbar = ({ sticky }) => {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? (
          <img src={LogoSolo} alt="logo" className="navbar--logo" />
        ) : null}
        <img src={TextLogo} alt="textlogo" className="navbar--textlogo"></img>{" "}
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">خانه</li>
        <li className="navbar--link-item">درباره ما</li>
        <li className="navbar--link-item">تماس با ما</li>
        <li className="navbar--link-item">وبلاگ</li>
      </ul>
    </nav>
  );
};
export default Navbar;
