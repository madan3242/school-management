import { useState } from "react";
import { z } from "zod";

const yearValidator = z.number().refine(
  (year) => {
    if (year < 1900 || year > Date.now()) {
      throw new Error(`Year must be between 1900 and 20023`);
    }
    return year;
  },
  {
    message: "Year must be between 1900 and 2023",
  }
);

const schema = z.object({
  stud_rollno: z.number({ required_error: "Roll number required" }),
  stud_name: z.string({ required_error: "Student name required" }),
  stud_phoneno: z.number({ required_error: "Phone number required" }).min(10).max(10),
  stud_address_city: z.string({ required_error: "City required" }),
  stud_address_pincode: z.number({ required_error: "Pincode required" }).min(6).max(6),
  stud_gender: z.enum(['MALE', 'FEMALE', 'OTHERS'], {  required_error: "Gender required"}),
  year_of_enroll: yearValidator,
});

// type student = {
//   stud_rollno: undefined | number;
//   stud_name: null | string;
//   stud_phoneno: null | number;
//   stud_address_city: null | string;
//   stud_address_pincode: null | number;
//   stud_gender: null | string;
//   year_of_enroll: null | number;
// };
const CreateStudent = () => {
  const [formData, setFormData] = useState({
    stud_rollno: '',
    stud_name: '',
    stud_phoneno: '',
    stud_address_city: '',
    stud_address_pincode: '',
    stud_gender: '',
    year_of_enroll: '',
  });

  const [errors, setErrors] = useState({
    stud_rollno: "",
    stud_name: "",
    stud_phoneno: "",
    stud_address_city: "",
    stud_address_pincode: "",
    stud_gender: "",
    year_of_enroll: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      console.log(schema);
      
      const validatedData = schema.parse(formData);      
      setFormData(validatedData);
      setErrors({});

    } catch (error) {   
        console.log(error);
           
        const validationErrors = {};
        for (const err of error.errors) {
          validationErrors[err.path] = err.message;
        }
        setErrors(validationErrors);
        console.log(validationErrors);
        
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-red-300 mt-2">
          <table className="p-2 m-2">
            <tr>
              <td>
                {errors.stud_rollno && (
                  <p className="error text-red">{errors.stud_rollno}</p>
                )}
                <label>Roll No:</label>
                <input
                  type="number"
                  placeholder="Enter Roll Number"
                  value={formData.stud_rollno}
                  onChange={handleInputChange}
                  name="stud_rollno"
                />
              </td>
              <td>
                {errors.stud_name && (
                  <p className="error">{errors.stud_name}</p>
                )}
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.stud_name}
                  onChange={handleInputChange}
                  name="stud_name"
                />
              </td>
            </tr>
          </table>
          <div className="p-2 m-2">
            {errors.stud_rollno && (
              <p className="error text-red">{errors.stud_rollno}</p>
            )}
            <label>Roll No:</label>
            <input
              type="number"
              placeholder="Enter Roll Number"
              value={formData.stud_rollno}
              onChange={handleInputChange}
              name="stud_rollno"
            />

            {errors.stud_name && <p className="error">{errors.stud_name}</p>}
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={formData.stud_name}
              onChange={handleInputChange}
              name="stud_name"
            />
          </div>

          <div className="p-2 m-2">
            {errors.stud_phoneno && (
              <p className="error">{errors.stud_phoneno}</p>
            )}
            <label>Phone No:</label>
            <input
              type="text"
              placeholder="Enter Phone No"
              value={formData.stud_phoneno}
              onChange={handleInputChange}
              name="stud_phoneno"
            />

            {errors.stud_gender && (
              <p className="error">{errors.stud_gender}</p>
            )}
            <label>Gender:</label>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={formData.stud_gender}
              onChange={handleInputChange}
              name="stud_gender"
            />
          </div>

          <div className="p-2 m-2">
            {errors.stud_address_city && (
              <p className="error">{errors.stud_address_city}</p>
            )}
            <label>City:</label>
            <input
              type="text"
              placeholder="Enter City"
              value={formData.stud_address_city}
              onChange={handleInputChange}
              name="stud_address_city"
            />

            {errors.stud_address_pincode && (
              <p className="error">{errors.stud_address_pincode}</p>
            )}
            <label>Pincode:</label>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={formData.stud_address_pincode}
              onChange={handleInputChange}
              name="stud_address_pincode"
            />
          </div>

          <div className="p-2 m-2">
            {errors.year_of_enroll && (
              <p className="error">{errors.year_of_enroll}</p>
            )}
            <label>Year of Enroll:</label>
            <input
              type="text"
              placeholder="Year of enroll"
              value={formData.year_of_enroll}
              onChange={handleInputChange}
              name="year_of_enroll"
            />
          </div>

          <div className="p-2 m-2">
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              className=""
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent