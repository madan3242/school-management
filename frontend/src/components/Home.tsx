import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-around items-center flex-col sm:flex-row " style={{ height: "calc(100vh - 4rem)" }}>
      <div className="py-28 px-32 m2 bg-neutral-200 rounded-xl flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          <Link to="/students">Students</Link>
        </h1>
      </div>
      <div className="py-28 px-32 m-2 bg-neutral-200 rounded-xl flex items-center justify-center">
        <h2 className="text-4xl font-bold ">
          <Link to="/teachers">Teachers</Link>
        </h2>
      </div>
    </div>
  );
}

export default Home