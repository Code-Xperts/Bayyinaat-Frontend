import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, type = "admin" }) => {
  const { isAuthenticated = false } = useSelector((state) => state.user);
  if (!isAuthenticated && type === "user") {
    return <Navigate to="/login" replace={true} />;
  } else if (!isAuthenticated && type === "admin") {
    return <Navigate to="/admin/login" replace={true} />;
  }
  return children;
};
