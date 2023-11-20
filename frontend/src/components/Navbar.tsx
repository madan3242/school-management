import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="h-16 p-4 bg-neutral-400 flex items-center justify-between fixed top-0 w-screen">
      <h2 className="text-2xl font-bold">
        School Management
      </h2>
      <ul className="flex justify-center">
        <li className="mr-4 text-lg font-medium">
          <Link to={'/students'}> Students</Link>
        </li>
        <li className="mr-4 text-lg font-medium">
          <Link to={'/teachers'}>Teachers</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar