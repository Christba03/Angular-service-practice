const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'arduino'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

// Example route to get data
app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
