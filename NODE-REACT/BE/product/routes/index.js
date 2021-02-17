var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '123456',
  port: 5433,
})


/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

// api get data from postgreSQL
router.get('/anhYeuEm', function(req, res, next) {
  pool.query('SELECT * FROM product', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'OK' });
});

module.exports = router;
