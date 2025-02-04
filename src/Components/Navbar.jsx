import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png.png";
import userId from "../assets/user.png";
import { AuthContex } from "../Router/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);

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
              <NavLink className="font-bold" to="/">
                Home
              </NavLink>
              <NavLink className="font-bold" to="/brands">
                Brands
              </NavLink>
              <NavLink className="font-bold" to="/profile">
                Profile
              </NavLink>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className=" w-20 lg:w-28 " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink className="font-bold text-lg" to="/">
              Home
            </NavLink>
            <NavLink className="font-bold text-lg" to="/brands">
              Brands
            </NavLink>
            <NavLink className="font-bold text-lg" to="/profile">
              Profile
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {user && user?.email ? (
            <div>
              <img className="w-12 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <img src={userId} alt="" />
          )}

          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral">
              Logout
            </button>
          ) : (
            <Link className="btn" to="/auth/login">
              Login
            </Link>
          )}
        </div>
      </div>

     <div className="text-center font-semibold py-5">
     {user && user?.email ? (
        <h2><span className="mr-2">Welcome</span>{user.displayName}</h2>
      ) : (
        <h2>Please login</h2>
      )}
     </div>
    </div>
  );
};

export default Navbar;
