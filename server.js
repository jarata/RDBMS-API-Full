const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const cohortRouter = require('./routes/cohortRouter');
const studentRouter = require('./routes/studentRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/cohorts', cohortRouter);
server.use('/api/students', studentRouter);

module.exports = server;