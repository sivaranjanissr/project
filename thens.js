
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var xx = require('./procshlps.js')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/*app.use(User.urlencoded({ extended: false}));
app.use(User.json());*/

app.use(express.static(__dirname))
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/cheps', function (req, res) {

    var user = new xx({
        "name": req.body.name,
        "salary": req.body.salary,
        "phno": req.body.phno,
        "mail": req.body.mail
    });

    user.save(function (err, data) {
        res.json(data);
    })
});
app.get('/chekps', function (req, res) {
    res.render('cheps');
});


console.log("oii")

app.use('/mini', express.static(path.join(__dirname, 'mini')))
app.use(express.static(__dirname));
console.log(__dirname)

app.listen(4000)
