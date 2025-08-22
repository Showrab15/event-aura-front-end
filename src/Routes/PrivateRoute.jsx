import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // null = loading
  const location = useLocation();

 useEffect(() => {
  const checkAuth = async () => {
    try {
      const res = await fetch("https://eventaura-server.vercel.app/check-auth", {
        credentials: "include",
      });

      setIsAuth(res.ok);
    } catch {
      setIsAuth(false);
    }
  };

  checkAuth();
}, [location]);



  if (isAuth === null) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
