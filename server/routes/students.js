const router = require('express').Router();

const Students = require('../models/Students');

// add new student
router.post('/add', async (req, res) => {
  try {
    const { email, firstName, lastName, group, course, pageNumber, pageSize } =
      req.body;
    const post = new Students({
      email,
      firstName,
      lastName,
      group,
      course,
      pageNumber,
      pageSize,
    });
    post.save().then(res.status(200).json(post));
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
      const post = await Students.findById(id);
      res.status(200).json({ post, success: true });
    }
  } catch (error) {
    console.log(error);
  }
});

// get all
router.get('/', async (req, res) => {
  try {
    const posts = await Students.find();

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { email, firstName, lastName, group, course, pageNumber, pageSize } =
      req.body;
    const student = await Students.findByIdAndUpdate(req.params.id, {
      email,
      firstName,
      lastName,
      group,
      course,
      pageNumber,
      pageSize,
    });
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
  }
});

//delete an student by id
router.delete('/:id', async (req, res) => {
  try {
    if (req.params.id != null) {
      res.status(404).json({ message: 'Id not found', success: false });
    } else {
      const post = await Students.findByIdAndDelete(req.params.id).then(
        res.status(200),
      );
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
