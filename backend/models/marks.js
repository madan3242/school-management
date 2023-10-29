import mongoose from "mongoose";

const marksSchema = mongoose.Schema({
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  marks: [
    {
      subjectName: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Marks = mongoose.Model("Marks", marksSchema);
