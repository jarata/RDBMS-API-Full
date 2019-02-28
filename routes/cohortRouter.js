const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// GET
router.get('/', async (req, res) => {
    // res.send('Cohorts GET')
    try {
        const cohort = await db('cohorts');
        res.status(200).json(cohort)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The cohorts information could not be retrieved."
        })
    }
});

// GET :id
router.get('/:id', async (req, res) => {
    // res.send('Cohorts GET/:id')
    const {id} = req.params;
    const cohort = await db('cohorts').where({id});
    try {
        if (cohort) {
            res.status(200).json(cohort)
        } else {
            res.status(404).json({
                message: "The cohort with the specified ID does not exist."
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The cohorts information could not be retrieved."
        })
    }
});

// GET :id/students
router.get('/:id/students', async (req, res) => {
    // res.send('Cohorts GET:id/students')
    const {id} = req.params;
    const cohortStudent = await db('cohorts').where({id})
    try {
        if (cohortStudent) {
            res.status(200).json(cohortStudent)
        } else {
            res.status(404).json({
                error: "The cohort's students with the specified ID do not exist"
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            error: "The cohort's students information could not be retrieved"
        })
    }
});

// POST
router.post('/', async (req, res) => {
    // res.send('Cohorts GET/:id')
    try {
        const cohort = await db('cohorts').insert(req.body);
        res.status(201).json({
            message: "Cohort has been created",
            cohort
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The cohorts information could not be retrieved."
        })
    }
});

// PUT :id
router.put('/:id', async (req, res) => {
    // res.send('Cohorts PUT/:id')
    const {id} = req.params;
    const cohortName = req.body;
    try {
        const cohort = await db('cohorts').where({id}).first();
        if (cohort) {
            const update = await db('cohorts').where({id}).update(cohortName);
            res.status(200).json(update)
        } else {
            res.status(404).json({
                message: "The cohort with the specified ID does not exist."
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The cohorts information could not be retrieved."
        })
    }
});

// DELETE :id
router.delete('/:id', async (req, res) => {
    // res.send('Cohorts DELETE/:id')
    const {id} = req.params;
    const count = await db('cohorts').where({id}).del();
    try {
        if (count > 0) {
            res.status(200).json({
                message: "Cohort has been deleted"
            })
        } else {
            res.status(404).json({
                message: "The cohort with the specified ID does not exist."
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The cohort could not be removed"
        })
    }
});

module.exports = router;