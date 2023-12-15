import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { fetchStudents } from "../../store/slices/studentSlice";

// type student_data = {
//   stud_id: number,
//   stud_name: string,
//   stud_rollno: string,
//   stud_phoneno: string
//   stud_address_city:string,
//   stud_address_pincode:number
//   year_of_enroll:number
// };

const Students = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data } = useAppSelector(state => state.students.students);
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch])

    const viewStudent = (student) => {
      setStudentData(student)
    };
  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mt-2">Students</h2>
          <button
            className="bg-blue-700 text-stone-50 px-4 py-2 my-1 rounded-md"
            onClick={() => navigate("/create")}
          >
            Create
          </button>
        </div>

        <div className="mt-3">
          <div className="flex w-full">
            <div className="w-3/4">
              <table className="w-full border border-collapse border-slate-400 text-center border-x-4 border-y-4 rounded-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 p-2 border-x-2 border-y-2">Roll No</th>
                    <th className="border border-slate-300 p-2 border-x-2 border-y-2">Name</th>
                    <th className="border border-slate-300 p-2 border-x-2 border-y-2">Phone no</th>
                    {/* <th className="border border-slate-300 p-2 border-x-2 border-y-2">City</th> */}
                    {/* <th className="border border-slate-300 p-2 border-x-2 border-y-2">Pincode</th> */}
                    <th className="border border-slate-300 p-2 border-x-2 border-y-2">Year(Joined)</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((student) => {
                    return (
                      <tr key={student.stud_id} onClick={() => viewStudent(student)} className="cursor-pointer">
                        <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.stud_rollno}
                        </td>
                        <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.stud_name}
                        </td>
                        <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.stud_phoneno}
                        </td>
                        {/* <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.stud_address_city}
                        </td>
                        <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.stud_address_pincode}
                        </td> */}
                        <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                          {student.year_of_enroll}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="w-1/4 mx-2 py-2 bg-slate-400 rounded-lg">
              <div className="p-4">
              { Object.keys(studentData).length > 0 ? <>
                <div className="flex justify-center">
                  <div className="rounded-full w-32 h-32 bg-white"></div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold py-2">Name: {studentData?.stud_name}</h2>
                  <p className="text-lg py-1">Roll No: {studentData?.stud_rollno}</p>
                  <p className="text-lg py-1">Phone No: {studentData?.stud_phoneno}</p>
                  <p className="text-lg py-1">City: {studentData?.stud_address_city}</p>
                  <p className="text-lg py-1">Pincode: {studentData?.stud_address_pincode}</p>
                  <p className="text-lg py-1">Gender: {studentData?.stud_gender}</p>
                  <p className="text-lg py-1">Year of enroll: {studentData?.year_of_enroll}</p>
                  <button className="text-lg py-2 px-3 bg-slate-800 text-white rounded-lg m-2" onClick={() => navigate(`/students/${studentData?.stud_rollno}`)}>View Marks</button>
                </div>
              </> : <>
                <div className="h-96 flex items-center justify-center">
                  <h2 className="text-xl font-semibold">Click on students to view.</h2>
                </div>
              </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students