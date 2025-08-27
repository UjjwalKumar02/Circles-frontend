import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="flex mx-auto">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="flex-1 p-6 pt-30">
        <h1 className="text-2xl text-center">Welcome Inside of Circles</h1>
      </div>
    </div>
  )
}

export default Home