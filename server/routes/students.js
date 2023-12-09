const router = require('express').Router();
const _ = require('lodash');

const Students = require('../models/Students');
const modelName = 'Student';

// add new student
router.post('/add', async (req, res) => {
  try {
    const { email, firstName, lastName, group, course } = req.body;
    const newStudent = new Students({
      email,
      firstName,
      lastName,
      group,
      course,
    });
    await newStudent.save();
    res.status(200).json({ data: newStudent });
  } catch (error) {
    console.log(error);
  }
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    const studentID = _.get(req, 'params.id');
    if (!studentID) {
      res.status(400).json({ message: 'Id not found', success: false });
    } else {
      const student = await Students.findById(studentID);
      res.status(200).json({ data: student });
    }
  } catch (error) {
    console.log(error);
  }
});

// get all
router.get('/', async (req, res) => {
  try {
    const students = await Students.find();

    res.status(200).json({ data: students });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const studentID = _.get(req, 'params.id');
    const { email, firstName, lastName, group, course } = req.body;
    const updatedStudent = await Students.findByIdAndUpdate(studentID, {
      email,
      firstName,
      lastName,
      group,
      course,
    });
    await updatedStudent.save();
    res.status(200).json({ data: updatedStudent });
  } catch (err) {
    console.log(err);
  }
});

//delete an student by id
router.delete('/:id', async (req, res) => {
  try {
    const studentId = _.get(req, 'params.id');
    if (!studentId) {
      return res.status(400).json({ message: `${modelName} ID required.` });
    } else {
      await Students.findByIdAndDelete(studentId).then(res.status(200));
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
