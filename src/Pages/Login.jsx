import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none  border-2 p-7">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <div className="form-control ">
            <button className="btn ">
              <span className="text-blue-500 font-bold text-lg">
                <FaGoogle />
              </span>
              Login with Google
            </button>
          </div>
          <div className="form-control ">
            <button className="btn ">
              <span className=" font-bold text-lg">
                <FaGithub />
              </span>
              Login with github
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Don’t Have An Account ?{" "}
          <Link className="text-blue-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
