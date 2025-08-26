import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("http://localhost:5000/users/me", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          navigate("/home"); // user is logged in
        } else {
          // user not logged in, stay on landing page
          console.log("User not logged in");
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    checkLogin();
  }, [navigate]);


  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <Navbar />
      <h1 className="sm:text-xl text-lg mb-8 text-center px-2">
        Sign in to connect, share, and explore communities.
      </h1>
      <button
        onClick={handleGoogleLogin}
        className="sm:px-12 sm:py-3.5 px-9 py-2.5 bg-gray-800 text-white rounded-xl shadow-md cursor-pointer hover:bg-black"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default LandingPage