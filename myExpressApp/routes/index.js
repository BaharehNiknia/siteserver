var express = require('express');
var router = express.Router();
//const app=express();var birds=require('./birds');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//app.use('/birds',birds);

module.exports = router;
