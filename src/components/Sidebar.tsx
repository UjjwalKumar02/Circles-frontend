import { NavLink, useNavigate } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useState } from "react";


const Sidebar = () => {
  const navigate = useNavigate();
  const [menuShow, setMenuShow] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const handleMenu = () => {
    setMenuShow(!menuShow);
  }

  const activeClass = "text-blue-400";
  const defaultClass = "hover:text-blue-400";

  return (
    <>
      <div className={`${menuShow ? "flex mt-20" : "hidden"} sm:flex h-screen flex-col gap-4 items-center justify-start px-8 py-6 border-x border-gray-200 transition-all duration-300`}>

        {!menuShow && (
          <NavLink
            to="/"
            className="text-xl mb-6">
            Circles
          </NavLink>
        )}
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}>
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}>
          Profile
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-left hover:text-red-400"
        >
          Logout
        </button>

      </div>
      <div className="sm:hidden w-full fixed top-0 bg-white p-6 border-b border-gray-200 transition-all duration-300">
        <div className="flex gap-2 items-center">
          <button onClick={handleMenu} className="cursor-pointer">
            <HiMenu />
          </button>
          <p className="">Circles</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar