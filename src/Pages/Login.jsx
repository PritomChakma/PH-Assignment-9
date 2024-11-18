import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser, googleUserLogin } = useContext(AuthContex);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        // console.log(user);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  // google login
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleUserLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none  border-2 p-7">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
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
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
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
            <button onClick={handleGoogleLogin} className="btn ">
              <span className="text-blue-500 font-bold text-lg">
                <FaGoogle />
              </span>
              Login with Google
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
