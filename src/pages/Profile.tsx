import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex mx-auto">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="flex-1 p-6 pt-30">
        <h1 className="text-2xl text-center">Your Profile</h1>
      </div>
    </div>
  );
};

export default Profile;