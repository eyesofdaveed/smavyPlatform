const router = require('express').Router();

const Students = require('../models/Students');

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
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: 'Id not found', success: false });
    } else {
      const student = await Students.findById(id);
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
    const { email, firstName, lastName, group, course } = req.body;
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, {
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
    if (req.params.id != null) {
      res.status(404).json({ message: 'Id not found' });
    } else {
      await Students.findByIdAndDelete(req.params.id).then(res.status(200));
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
