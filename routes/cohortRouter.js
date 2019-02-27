const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// GET
router.get('/', async (req, res) => {
    res.send('Cohorts GET')
});

// GET :id
router.get('/', async (req, res) => {
    res.send('Cohorts GET/:id')
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