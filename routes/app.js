var express = require('express');
var router = express.Router();
var User = require('../models/user');
/*router.get('/', function (req, res, next) {
    res.render('index');
});*/

router.get('/', function (req, res, next) {
        res.render('index');
});

/*router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err){
            return res.send('Error while retriving');
        }

        res.render('node' ,{email:doc});
    });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User(
        {
            firstName: 'Amit',
            lastName :'Gupta',
            password : 'super-secret',
            email :email
        } );

        user.save(function(err, result){
 
        });
 
     res.redirect('/');
});*/

module.exports = router;
