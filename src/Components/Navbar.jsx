import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png.png";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/brands">Brands</NavLink>
              <NavLink to="/profile">My Profile</NavLink>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className=" w-20 lg:w-28 " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/brands">Brands</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
