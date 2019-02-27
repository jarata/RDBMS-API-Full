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
    res.send('Cohorts GET/:id')
});

// GET :id/students
router.get('/:id/students', async (req, res) => {
    res.send('Cohorts GET:id/students')
});

// POST
router.post('/', async (req, res) => {
    res.send('Cohorts GET/:id')
});

// PUT :id
router.put('/:id', async (req, res) => {
    res.send('Cohorts PUT/:id')
});

// DELETE :id
router.delete('/:id', async (req, res) => {
    res.send('Cohorts DELETE/:id')
});

module.exports = router;