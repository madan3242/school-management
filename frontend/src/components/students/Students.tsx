import { useEffect } from "react";
import { fetchStudents } from "../../store/students/students.action";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

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
    const { data } = useAppSelector(state => state.students.students);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch])

    const fun = () => {

    }
  return (
    <div>
      <div className="h-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mt-2">Students</h2>
          <button className="bg-blue-700 text-stone-50 px-4 py-2 my-1 rounded-md" onClick={() => navigate('/create')}>Create</button>
        </div>
        <div className="mt-3 flex">
          <table className="table-auto w-3/4 border border-collapse border-slate-400 text-center">
            <thead>
              <tr>
                <th className="border border-slate-300">Roll No</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Phone no</th>
                <th className="border border-slate-300">City</th>
                <th className="border border-slate-300">Pincode</th>
                <th className="border border-slate-300">Year(Joined)</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((student) => {
                return (
                  <tr key={student.stud_id} onMouseOver={fun}>
                    <td className="border border-slate-300">
                      {student.stud_rollno}
                    </td>
                    <td className="border border-slate-300">
                      {student.stud_name}
                    </td>
                    <td className="border border-slate-300">
                      {student.stud_phoneno}
                    </td>
                    <td className="border border-slate-300">
                      {student.stud_address_city}
                    </td>
                    <td className="border border-slate-300">
                      {student.stud_address_pincode}
                    </td>
                    <td className="border border-slate-300">
                      {student.year_of_enroll}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-1/4 mx-2 py-2 h-full">Hi</div>
        </div>
      </div>
    </div>
  );
}

export default Students