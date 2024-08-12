import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const [theme, setTheme] = useState("theme-light");
  const changeTheme = () => {
    if (document.body.classList.contains("theme-light")) {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      setTheme("theme-dark");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      setTheme("theme-light");
    }
  };
  return (
    <section>
      <section>
        <Header theme={theme} changeTheme={changeTheme} />
      </section>
      <Outlet />
    </section>
  );
};

export default Layout;
