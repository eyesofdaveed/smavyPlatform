const router = require('express').Router();

const Assignments = require('../models/Assignments');

// add new assignment
router.post('/add', async (req, res) => {
    try {
        const newAssignment = new Assignments({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
})

// get all assignments
router.get('/', async (req, res) => {
    try {
        const asssignments = await Assignments.find();
        res.status(200).json(asssignments);
    } catch (err) {
        console.log(err);
    }
})

// find a assignment by id, and modify it
router.put('/:id', async (req, res) => {
    try {
        const updatedAssignment = await Assignments.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(updatedAssignment);
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;