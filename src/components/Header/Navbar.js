import React from "react";
import "./Navbar.css";
import "./Navbar.scss";
import LogoSolo from "../../assets/images/logosolo.svg";
import TextLogo from "../../assets/images/textlogo.svg";
import nav2 from "../../assets/images/nav2.svg";

const Navbar = ({ sticky }) => {
  return (
    <>
      <img src={nav2} alt="logo" className="nav2" />

      <nav className={sticky ? "navbar-custom navbar-sticky" : "navbar-custom"}>
        <div className="navbar--logo-holder">
          {sticky ? (
            <img src={LogoSolo} alt="logo" className="navbar--logo" />
          ) : null}
          <img src={TextLogo} alt="textlogo" className="navbar--textlogo"></img>{" "}
        </div>
        <ul className="navbar--link d-none d-lg-flex">
          <li className="navbar--link-item">خانه</li>
          <li className="navbar--link-item">درباره ما</li>
          <li className="navbar--link-item">تماس با ما</li>
          <li className="navbar--link-item">وبلاگ</li>
        </ul>

        <div className="mobile-menu d-lg-none">
          <input
            type="checkbox"
            id="checkbox"
            className="mobile-menu__checkbox"
          ></input>
          <label htmlFor="checkbox" className="mobile-menu__btn">
            <div className="mobile-menu__icon"></div>
          </label>
          <div className="mobile-menu__container">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a href="/#" className="mobile-menu__link">
                  خانه
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="/#" className="mobile-menu__link">
                  درباره ما
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="/#" className="mobile-menu__link">
                  تماس با ما
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="/#" className="mobile-menu__link">
                  وبلاگ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
