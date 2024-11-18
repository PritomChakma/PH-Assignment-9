import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import { AuthContex } from "./AuthProvider";
// import { AuthContex } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const loaction = useLocation();
  // console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
