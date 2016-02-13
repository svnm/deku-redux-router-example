var express = require('express');
var router = express.Router();

// any middleware specific to this router here... router.use ...

router.get('/', function(req, res) {

  var data = {
    "results": [
      { 
        "name": "Gleaming the Cube",
        "url": "/1",
        "rating": 0.93
      },
      { "name": "Prayer of the Rollerboys",
        "url": "/2",
        "rating": 0.95
      }
    ]
  }

  res.json(data)

});

module.exports = router;
