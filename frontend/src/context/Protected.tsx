import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContex";

export default function Protected() {
  const { isloggedIn } = useAuth();
  const location = useLocation();

  if (!isloggedIn) {
    return (
      <Navigate
        to="/admin/aj/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}