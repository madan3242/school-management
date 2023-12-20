
const CreateTeachers = () => {

    const handleSubmit = (event) => {}
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/5 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 w-full mt-2 p-4 rounded-lg"
        >
          <div className=" m-2 flex">
            <div className="w-1/2 m-2">
              {/* {errors.stud_rollno && (
                <p className="error text-red">{errors.stud_rollno}</p>
              )} */}
              {/* <label className="p-2 m-1 w-2/5">Roll No:</label> */}
              <input
                type="text"
                placeholder="Roll No"
                className="p-2 m-1 w-full"
                value={formData.stud_rollno}
                onChange={handleInputChange}
                name="stud_rollno"
              />
            </div>

            <div className="w-1/2 m-2">
              {errors.stud_name && <p className="error">{errors.stud_name}</p>}
              {/* <label className="p-2 m-1 w-2/5">Name:</label> */}
              <input
                type="text"
                className="p-2 m-1 w-full"
                placeholder="Name"
                value={formData.stud_name}
                onChange={handleInputChange}
                name="stud_name"
              />
            </div>
          </div>

          <div className=" m-2 flex">
            <div className="w-1/2 m-2">
              {errors.stud_phoneno && (
                <p className="error">{errors.stud_phoneno}</p>
              )}
              {/* <label className="p-2 m-1 w-2/5">Phone No:</label> */}
              <input
                type="text"
                placeholder="Phone No"
                className="p-2 m-1 w-full"
                value={formData.stud_phoneno}
                onChange={handleInputChange}
                name="stud_phoneno"
              />
            </div>

            <div className="w-1/2 m-2">
              {errors.stud_gender && (
                <p className="error">{errors.stud_gender}</p>
              )}
              {/* <label className="w-2/5 p-2 m-1">Gender:</label> */}
              <input
                type="text"
                placeholder=" Gender"
                className="w-full p-2 m-1"
                value={formData.stud_gender}
                onChange={handleInputChange}
                name="stud_gender"
              />
            </div>
          </div>

          <div className=" m-2 flex">
            <div className="w-1/2 m-2">
              {errors.stud_address_city && (
                <p className="error">{errors.stud_address_city}</p>
              )}
              {/* <label className=" p-2 m-1">City:</label> */}
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 m-1"
                value={formData.stud_address_city}
                onChange={handleInputChange}
                name="stud_address_city"
              />
            </div>

            <div className="w-1/2 m-2">
              {errors.stud_address_pincode && (
                <p className="error">{errors.stud_address_pincode}</p>
              )}
              {/* <label className="w-2/5 p-2 m-1">Pincode:</label> */}
              <input
                type="text"
                placeholder="Pincode"
                className="w-full p-2 m-1"
                value={formData.stud_address_pincode}
                onChange={handleInputChange}
                name="stud_address_pincode"
              />
            </div>
          </div>

          <div className=" m-2 flex">
            <div className="w-1/2 m-2">
              {errors.year_of_enroll && (
                <p className="error">{errors.year_of_enroll}</p>
              )}
              {/* <label className="p-2 m-1">Year of Enroll:</label> */}
              <input
                type="text"
                placeholder="Year of enroll"
                className="w-full p-2 m-1"
                value={formData.year_of_enroll}
                onChange={handleInputChange}
                name="year_of_enroll"
              />
            </div>
            <div className="w-1/2 m-2"></div>
          </div>

          <div className="p-2 m-2 flex items-center justify-center">
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              className="w-1/2 bg-blue-600 p-2 rounded-lg text-white text-lg hover:bg-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTeachers