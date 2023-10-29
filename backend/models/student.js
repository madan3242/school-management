import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  address: {
    houseNo: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
});

const Student = mongoose.Model('Student', studentSchema)