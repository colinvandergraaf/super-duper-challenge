const express = require('express');
const bodyParser = require('body-parser');

const { Pool } = require('pg');

const pool = new Pool({
  user: user,
  password: password,
  host: host,
  port: '5432',
  database: database,
  ssl: { rejectUnauthorized: false },
});

// create express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// port on which the server will run
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(
    `Create an endpoint that takes a core group ID as an argument and returns all members in that core group ---- Path: '/core_groups/:id/members'
    <br /><br />You can use '/core_groups/326/members' to test`
  );
});

app.get('/members', (req, res) => {
  pool.query('SELECT * FROM members;', (err, results) => {
    res.send(results.rows);
  });
});

app.get('/core_groups', (req, res) => {
  pool.query('SELECT * core_group', (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

// Create an endpoint that takes a core group id and returns all members in that core group
// Path: `/core_groups/:id/members`

app.listen(port, () => {
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${PORT}`);
});
