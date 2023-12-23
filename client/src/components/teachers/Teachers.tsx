import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTeachers } from "../../store/slices/teacherSlice";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state) => state.teachers.teachers.data
  );

  const [teacherData, setTeacherData] = useState({});

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  const viewTeacher = (teacher) => {
    setTeacherData(teacher);
  };
  return (
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mt-2">Teachers</h2>
          <button
            className="bg-blue-700 text-stone-50 px-4 py-2 my-1 rounded-md"
            onClick={() => navigate("/create")}
          >Create</button>
        </div>

        <div className="mt-3">
            <div className="mt-3">
              <div className="flex w-full">
                <div className="w-3/4">
                  <table className="w-full border border-collapse border-slate-400 text-center border-x-4 border-y-4 rounded-sm">
                    <thead>
                      <tr>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">Teacher ID</th>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">Name</th>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">Phone no</th>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">City</th>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">Pincode</th>
                        <th className="border border-slate-300 p-2 border-x-2 border-y-2">Qualification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers?.map((teacher) => {
                        return (
                          <tr key={teacher.teach_id} onClick={() => viewTeacher(teacher)} className="cursor-pointer">
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.teach_regno}
                            </td>
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.teach_name}
                            </td>
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.teach_phoneno}
                            </td>
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.teach_address_city}
                            </td>
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.teach_address_pincode}
                            </td>
                            <td className="border border-slate-300 p-1 border-x-2 border-y-2">
                              {teacher.qualification}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="w-1/4 mx-2 py-2 bg-slate-400 rounded-lg">
                { Object.keys(teacherData).length > 0 ? <>
                  <div className="p-4">
                    <div className="flex justify-center">
                      <div className="rounded-full w-32 h-32 bg-white"></div>
                    </div>
                    <div className="text-center">
                      <h2 className="text-xl font-bold py-2">Name: {teacherData?.teach_name}</h2>
                      <p className="text-lg py-1">Teacher Regno: {teacherData?.teach_regno}</p>
                      <p className="text-lg py-1">Phone No: {teacherData?.teach_phoneno}</p>
                      <p className="text-lg py-1">City: {teacherData?.teach_address_city}</p>
                      <p className="text-lg py-1">Pincode: {teacherData?.teach_address_pincode}</p>
                      <p className="text-lg py-1">Gender: {teacherData?.teach_gender}</p>
                      <p className="text-lg py-1">Qualification: {teacherData?.qualification}</p>
                    </div>
                  </div>
                </> : <>
                  <div className="h-96 flex items-center justify-center">
                  <h2 className="text-xl font-semibold">Click on teachers to view.</h2>
                </div>
                </> }
            </div>
              </div>
            </div>
        </div>
      </div>
  );
}

export default Teachers