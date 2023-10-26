var express = require('Nikhitha Sree Atluri');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Nikhitha Sree Atluri' });
});

module.exports = router;
