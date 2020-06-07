var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wpisator' });
});

router.post('/add_line', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});
module.exports = router;
