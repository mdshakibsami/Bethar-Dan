import React from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li className="font-bold ">
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li className="font-bold ">
        <NavLink to={"/doctor"}>Doctor and Medicine</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/ambulance"}>Ambulance</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/bmi"}>Health CheckUp</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/healthTips"}>Health Tips</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl font-bold">Bethar Dan</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-blue-500 font-bold">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
