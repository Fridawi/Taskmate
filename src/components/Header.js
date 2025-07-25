import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.remove(
      "dark",
      "light",
      "medium",
      "gOne",
      "gTwo",
      "gThree"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="TaskMate Logo" />
        <span>TaskMate</span>
      </div>
      <div className="themeSelector">
        <span
          className={`light ${theme === "light" ? "activeTheme" : ""}`}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={`medium ${theme === "medium" ? "activeTheme" : ""}`}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={`dark ${theme === "dark" ? "activeTheme" : ""}`}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={`gOne ${theme === "gOne" ? "activeTheme" : ""}`}
          onClick={() => setTheme("gOne")}
        ></span>
        <span
          className={`gTwo ${theme === "gTwo" ? "activeTheme" : ""}`}
          onClick={() => setTheme("gTwo")}
        ></span>
        <span
          className={`gThree ${theme === "gThree" ? "activeTheme" : ""}`}
          onClick={() => setTheme("gThree")}
        ></span>
      </div>
    </header>
  );
}

export default Header;
