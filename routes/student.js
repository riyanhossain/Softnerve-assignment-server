const express = require('express');
const { createStudent, getAllStudents, updateStudent, deleteStudent, getStudentById } = require('../controllers/student');
const router = express.Router();

router.post('/student', createStudent);

router.get('/student', getAllStudents);

router.patch('/student/:id', updateStudent);

router.delete('/student/:id', deleteStudent);

router.get('/student/:id', getStudentById);

module.exports = router;