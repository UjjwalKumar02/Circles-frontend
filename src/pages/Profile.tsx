import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="lg:w-[60%] w-[100%] flex mx-auto">
      <Sidebar />
      <div className="flex-1 p-6 border-r border-gray-200 mt-20">
        <h1 className="text-2xl text-center">Your Profile</h1>
      </div>
    </div>
  );
};

export default Profile;