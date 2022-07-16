const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//student details
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    rollno: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);