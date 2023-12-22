import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="h-16 p-4 bg-blue-400 flex items-center justify-between fixed top-0 w-screen">
      <h2 className="text-2xl font-bold text-white">
        <Link to={"/"}>School Management</Link>
      </h2>
      <ul className="flex justify-center">
        <li className="mr-4 text-lg font-medium text-white">
          <Link to={"/students"}> Students</Link>
        </li>
        <li className="mr-4 text-lg font-medium text-white">
          <Link to={"/teachers"}>Teachers</Link>
        </li>
        <li className="mr-4 text-lg font-medium text-white border-white border-2 px-2 rounded-md">
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar