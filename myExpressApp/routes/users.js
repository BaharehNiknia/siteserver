var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');

res.json([{
  id: 1,
  username: "BHsamsepi0l"
}, {
  id: 2,
  username: "BHD0loresH4ze"
}]);
});
 // And insert something like this instead:
 


module.exports = router;
