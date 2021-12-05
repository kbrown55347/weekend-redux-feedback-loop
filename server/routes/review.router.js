const express = require('express');
const router = express.Router();

const pg = require('pg');

const pool = require('../modules/pool.js');
const Pool = pg.Pool;

// create our pool object using the above constructor:
const pool = new Pool({
    database: 'prime_feedback',
    host: 'Localhost',
});

// log to console when pool object makes connection
pool.on('connect', () => {
    console.log('Postgresql connected');
});

// log to console when something makes our pool error out
pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

// POST Route
router.post('/', (req, res) => {
    console.log('in POST /submitReview')
    // console.log('adding review object', req.body);
//     let newTask = req.body;
//     let queryText = `INSERT INTO "taskList" 
//     ("name", "description", "completeByDate", "isComplete")
//     VALUES ($1, $2, $3, $4);`;
//     let queryValues = [
//         newTask.name,
//         newTask.description,
//         newTask.date,
//         newTask.isComplete
//     ];
//     pool.query(queryText, queryValues)
//         .then(dbRes => {
//             res.sendStatus(200);
//         })
//         .catch(dbErr => {
//             res.sendStatus(500);
//         });
// });
});

module.exports = reviewRouter;