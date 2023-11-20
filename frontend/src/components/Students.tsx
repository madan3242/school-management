const Students = () => {
  return (
    <div className="w-screen px-5">
        <div className="pt-16">
            <div>
                <h2 className="text-2xl font-semibold mt-2">Students</h2>
            </div>
            <div className="mt-3">
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
                        <tr>
                            <td className="border border-slate-300">1</td>
                            <td className="border border-slate-300">Madan</td>
                            <td className="border border-slate-300">9483644177</td>
                            <td className="border border-slate-300">Bengaluru</td>
                            <td className="border border-slate-300">560036</td>
                            <td className="border border-slate-300">2022</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300">1</td>
                            <td className="border border-slate-300">Madan</td>
                            <td className="border border-slate-300">9483644177</td>
                            <td className="border border-slate-300">Bengaluru</td>
                            <td className="border border-slate-300">560036</td>
                            <td className="border border-slate-300">2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Students