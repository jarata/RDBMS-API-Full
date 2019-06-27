const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// GET
router.get('/', async (req, res) => {
    // res.send('Students GET')
    try {
        const student = await db('students');
        res.status(200).json(student)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The students information could not be retrieved."
        })
    }
});

// GET :id
router.get('/', async (req, res) => {
    res.send('Students GET/:id')
});

// POST
router.post('/', async (req, res) => {
    res.send('Students GET/:id')
});

// PUT :id
router.put('/:id', async (req, res) => {
    res.send('Students PUT/:id')
});

// DELETE :id
router.delete('/:id', async (req, res) => {
    res.send('Students DELETE/:id')
});

module.exports = router;