import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      {theme === "dark" ? (
        <BsFillMoonStarsFill
          onClick={toggleTheme}
          className="bi bi-brightness-high"
          id="toggleDark"
        />)
         : (
        <MdWbSunny
          onClick={toggleTheme}
          className="bi bi-brightness-high"
          id="toggleDark"
          style={{fill:"yellow"}}
        />
      )}
    </div>
  );
};

export default Theme;

<div></div>