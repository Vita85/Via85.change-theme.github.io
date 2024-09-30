import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

const HeaderComponent = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={`header-${theme}`}>
      HEADER CONTENT
      <button className="button" onClick={changeTheme}>
        Change Theme
      </button>
    </header>
  );
};

export default HeaderComponent;
