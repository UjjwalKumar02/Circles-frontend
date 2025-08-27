import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";


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
    <div className="h-screen flex flex-col items-center justify-center sm:gap-8 gap-6">
      {/* <Navbar /> */}
      <h1 className="sm:text-6xl text-4xl">
        Circles
      </h1>
      <h1 className="sm:text-xl text-center px-2 text-gray-800">
        Sign in to connect, share, and explore communities.
      </h1>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-1.5 sm:px-11 sm:py-3 px-9 py-2.5 rounded-lg shadow-xs border border-gray-300 cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-800"
      >
        <span>Sign in with</span>
        <FcGoogle />
        <span>Google</span>
      </button>
    </div>
  )
}

export default LandingPage