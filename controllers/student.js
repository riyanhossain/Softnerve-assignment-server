const studentModel = require("../models/student");

const createStudent = async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating student",
      error: err.message,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "All students fetched successfully",
      students,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching students",
      error: err.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    res.status(200).json({
      message: "Student fetched successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching student",
      error: err.message,
    });
  }
}

const updateStudent = async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating student",
      error: err.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Student deleted successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting student",
      error: err.message,
    });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
};
