"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import classNames from "classnames";
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 w-14 h-[23px] rounded-full bg-violet-300 flex item-center"
    >
      <span
        className={classNames(
          "flex items-center justify-center w-6 h-6 bg-violet-700 rounded-full transition-all duration-500",
          {
            "ml-8": theme === "dark",
          }
        )}
      >
        {theme === "light" ? (
          <FaMoon className="text-white" size={16} />
        ) : (
          <FaSun className="text-white" size={16} />
        )}
      </span>
    </div>
  );
};

export default ThemeSwitch;
