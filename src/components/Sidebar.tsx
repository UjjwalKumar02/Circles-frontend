import { NavLink, useNavigate } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";


const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(!isOpen);
  }

  const activeClass = "text-blue-400";
  const defaultClass = "hover:text-blue-400";

  return (
    <>
      <div className="sm:flex hidden h-screen flex-col gap-6 items-center justify-start px-18 py-6 text-lg border-r-1 border-gray-300 transition-all duration-300 pt-28 shadow-md">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
        >
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
        <div className="flex items-center justify-between">
          <p className="text-xl">Circles</p>
          <button onClick={handleMenu} className="cursor-pointer">
            <RxHamburgerMenu size={26}/>
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button 
          onClick={() => setIsOpen(false)}
          className="fixed right-0 p-6 cursor-pointer"
        >
          <FiX size={26}/>
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-10 text-xl">
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
      </div>
    </>
  )
}

export default Sidebar