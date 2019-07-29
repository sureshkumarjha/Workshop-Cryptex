const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const md5 = require('md5');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: '18.222.8.13',
    user: 'root',
    password: '',
    database: 'login'
})

connection.connect(function(error){
    if (!!error){
        console.log('error'+error)
    } else {
        console.log('Connected');
    }
})

app.get('/asd', function (req, resp) {
    resp.send('Hello World');
});

app.post('/qwe', function (req, resp) {
    const nam = req.body.name;
    console.log(nam);
    resp.send("This is the name "+nam);
});



app.post('/login', function (req, resp) {
    const username = req.body.username;
    const passwd = md5(req.body.passwd);
    console.log(username,passwd);
    connection.query('SELECT * FROM users WHERE uname=? AND upassword=?',[username,passwd], function (err, result) {
        if(result.length > 0){
            console.log('Executed');
            resp.send({state: true,result: result});
        } else {
            console.log("Error"+err )
            resp.send(false);
        }
    })
})

app.listen(4000, () => { console.log('Listening port 4000') })