import { useState } from "react";
import Nav2 from "./Nav2";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`nav flex justify-between items-center py-4 px-5 
      ${isDark ? "dark" : "light"}`}
    >
      <h2 className="font-bold text-xl">Variance</h2>

      <button
        onClick={() => setIsDark(!isDark)}
        className="px-3 py-1 rounded bg-gray-300 text-black"
      >
        Toggle
      </button>

      <Nav2 />
    </div>
  );
};

export default Navbar;
