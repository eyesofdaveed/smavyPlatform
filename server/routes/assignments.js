const router = require('express').Router();

const Assignments = require('../models/Assignments');
const Entity = require('../api');

const assignment = new Entity(Assignments);

// add new assignment
router.post('/add', async (req, res) => {
    const { title, description, deadline } = req.body;

    assignment.add({title, description, deadline}, res);
})

// get all assignments
router.get('/', async (req, res) => {
    const { pageSize, pageNumber} = req.body.filter;

    assignment.getAll({
        req,
        res,
        pageSize,
        pageNumber,
    });
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