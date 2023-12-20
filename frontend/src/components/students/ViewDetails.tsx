import { Link } from "react-router-dom";

const ViewDetails = () => {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 4rem)" }}>
      {/* <div>
            <div className="flex justify-center">
            <div className="rounded-full w-32 h-32 bg-slate-200"></div>
        </div>
        <h2>Hi</h2>
        </div> */}
      <div className="mx-3">
        <Link to="/students">Back</Link>
      </div>
      <div className="w-full flex" style={{ height: "calc(100vh - 6rem)" }}>
        <div className="w-1/2 bg-blue-200 p-2 m-3 rounded-lg">
          Student Details
        </div>
        <div className="w-1/2 bg-blue-200 p-2 m-3 rounded-lg">
          Student Marks
        </div>
      </div>
    </div>
  );
}

export default ViewDetails