import React from "react";

import logo from "../images/header/__logo/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сервиса Mesto" src={logo} />
    </header>
  );
}

export default Header;