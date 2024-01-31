import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, type = "user" }) => {
  const { isAuthenticated = false } = useSelector((state) => state.user);

  if (isAuthenticated && type === "admin") {
    return <Navigate to="/admin/dashboard" replace={true} />;
  }
  //  else if (isAuthenticated && type === "admin") {
  //   return <Navigate to="/home" replace={true} />;
  // }
  return children;
};
