const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');

const cohortRouter = require('./routes/cohorts/cohortRouter');
const studentRouter = require('./routes/students/studentRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());


('/api/cohorts', cohortRouter);
('/api/students', studentRouter);

module.exports = server;