import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  }
});

const Teacher = mongoose.Model('Student', studentSchema)