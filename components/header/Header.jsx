import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <img className="header-logo" src="/images/logo.jpg" alt="" />
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">+97699119911</section>
        <section className="header-bottom__email">
          gg69.example@gmail.com
        </section>
      </section>
    </section>
  );
};

export default Header;
