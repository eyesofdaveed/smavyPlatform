const router = require('express').Router();

const Assignments = require('../models/Assignments');

// add new assignment
router.post('/add', async (req, res) => {
    try {
        const {title, description, deadline} = req.body;

        const assignment = await Assignments.save({
            title,
            description,
            deadline
        });
        res.status(200).json(assignment);
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
        const assignment = await Assignments.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(assignment);
    } catch (err) {
        console.log(err);
    }
})


//delete an assignment by id
router.put('/:id', async (req, res) => {
    const deletionCriteria = { _id: 123 };
    try {
        const assignment = await Assignments.deleteOne({deletionCriteria
        });
        res.status(200).json(assignment);
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;