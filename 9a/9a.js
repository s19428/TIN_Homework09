var express = require('express');

var app = express();
app.set('view engine', 'pug')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/form', function(req, res){

    res.sendFile('/form.html', { root: '.' });
});


app.post('/formdata', (req, res) => {
    console.log(req.body);

    // res.render('index', { 
    //                         title: 'Received data', 
    //                         getData1: function () { return req.body.f1; }, 
    //                         getData2: function () { return req.body.f2; }, 
    //                         getData3: function () { return req.body.f3; } });

    var  n1 = parseInt(req.body.f1);
    var n2 = parseInt(req.body.f2);
    var operation = req.body.f3;
    var r = 0;

    switch(operation)
    {
        case '+':
            r = n1 + n2;
            break;
        case '-':
            r = n1 - n2;
            break;
        case '/':
            r = n1 / n2;
            break;
        case '*':
            r = n1 * n2;
            break;
    }

    res.json({ result: r });
   });
   
   //res.json({ result: 'Flavio' });


app.listen(3000);