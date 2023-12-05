import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../store/teachers/teachers.action";
import { useEffect } from "react";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state) => state.teachers.teachers.data
  );

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);
  return (
      <div>
        <div>
          <h2 className="text-2xl font-semibold mt-2">Teachers</h2>
        </div>
        <div className="mt-3">
          <table className="table-auto w-3/4 border border-collapse border-slate-400 text-center">
            <thead>
              <tr>
                <th className="border border-slate-300">Teacher ID</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Phone no</th>
                <th className="border border-slate-300">City</th>
                <th className="border border-slate-300">Pincode</th>
                <th className="border border-slate-300">Qualification</th>
              </tr>
            </thead>
            <tbody>
              {teachers?.map((teacher) => {
                return (
                  <tr key={teacher.teach_id}>
                    <td className="border border-slate-300">
                      {teacher.teach_regno}
                    </td>
                    <td className="border border-slate-300">
                      {teacher.teach_name}
                    </td>
                    <td className="border border-slate-300">
                      {teacher.teach_phoneno}
                    </td>
                    <td className="border border-slate-300">
                      {teacher.teach_address_city}
                    </td>
                    <td className="border border-slate-300">
                      {teacher.teach_address_pincode}
                    </td>
                    <td className="border border-slate-300">
                      {teacher.qualification}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Teachers