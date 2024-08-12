import React from "react";

const Toggle = ({ theme, changeTheme }) => {
  return (
    <section className="toggle">
      <img src="assets/desktop/icon-sun.svg" alt="sun" />
      <div className="toggle_btn" onClick={changeTheme}>
        <div className={`${theme === "theme-dark" ? "dark" : ""} ball`}></div>
      </div>
      <img src="assets/desktop/icon-moon.svg" alt="moon" />
    </section>
  );
};

export default Toggle;
