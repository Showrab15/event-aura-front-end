import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // null = loading
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/check-auth", {
          credentials: "include",
        });

        if (res.ok) {
          setIsAuth(true); // ✅ Authenticated
        } else {
          setIsAuth(false); // ❌ Not authenticated
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
