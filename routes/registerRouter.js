var express = require('express');
var bodyParser = require('body-parser');
var registerRouter = express.Router();

var Register  = require('../model/register');

registerRouter.use(bodyParser.json());

registerRouter.route('/')

.get(function(req,res,next){
        Register.find({},function(err, dish){
          if(err) throw err;
          res.json(dish);
        });
})

.post(function(req,res,next) {
    Register.create(req.body, function(err, dish) {
        if (err) throw err;
        console.log('User Registered!');
        var id = dish._id;

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end('Added the user with id: ' + id);
    });
})

.delete(function(req, res, next){
        Register.remove({},function(err,resp){
          if(err) throw err;
          res.json(resp);
        });
});

module.exports = registerRouter;