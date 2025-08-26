import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/users/me", {
          method: "GET",
          credentials: "include", // important for cookies
        });
        setIsAuth(res.ok);
      } catch (error) {
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) return <p>Loading...</p>; // show loading while checking
  return isAuth ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
