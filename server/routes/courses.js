const router = require('express').Router();
const _ = require('lodash');

const Courses = require('../models/Courses');
const Assignment = require('../models/Assignments');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const course = new ApiOptimizer(Courses);

router.route('/').get(async (req, res) => {
    try {
      await course.getAll(req, res);
    } catch (err) {
      errorHandler(err, req, res);
    }
  });

  router.route('/:id').get(async (req, res) => {
    try {
      const course = await Courses.findById({ _id: req.params.id}).populate('assignment_id teacher_id');
      console.log(course, 22)
      res.status(200).json({ course });
      // res.send(course);
    } catch (err) {
      errorHandler(err, req, res);
    }
  });

  // add new course done
router.route('/add').post(async (req, res) => {
    try {
      const { name, description, teacher_id, status } = req.body;
      const assignment = new Assignment({title: 'Assignment', description: 'Assignment description'});
      const {_id} = await assignment.save();
      const entity = { name, description, assignment_id: [_id], teacher_id, status };
      let course = new Courses(entity);
      await course.save();
      const data = await Courses.findById({_id: course._id}).populate('assignment_id teacher_id');
      res.status(200).json({ data });
    } catch (err) {
      errorHandler(err, req, res);
    }
  });

  router.route('/:id').put(async (req, res) => {
    try {
      const entityId = _.get(req, 'params.id');
      const { name, description, teacher_id, status } = req.body;
      const fieldsToUpdate = { name, description, teacher_id, status };
      await course.updateById({ entityId, fieldsToUpdate, req, res });
      res.json(course);
    } catch (err) {
      errorHandler(err, req, res);
    }
  });
  
  module.exports = router;