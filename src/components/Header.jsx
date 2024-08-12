import React from "react";
import Toggle from "./Toggle";

const Header = ({ theme, changeTheme }) => {
  return (
    <header>
      <section>
        <img src="/assets/desktop/logo.svg" alt="logo" />
        <Toggle theme={theme} changeTheme={changeTheme} />
      </section>
    </header>
  );
};

export default Header;
