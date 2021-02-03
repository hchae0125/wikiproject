const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());

var connection = mysql.createConnection({
    host:'wikiprojectdb.cju7fv11u0ey.us-east-2.rds.amazonaws.com',
    user:'admin',
    password:'Gksmf0410!',
    port:'3306'
});
connection.connect(function(err) {
    if (err){
        console.error('Database connection failed' + err.stack);
        return;
    }
    console.log('connected to database');
})
app.get('/test', (req, res) => {
    console.log(req);
    res.send('Welcome to the Backend');
})

app.listen(4000, ()=>{
    console.log('running on port 4000');
});