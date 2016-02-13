var express = require('express');
var router = express.Router();

// any middleware specific to this router here... router.use ...

router.get('/', function(req, res) {

  var data = {
    "results": [
      { 
        "name": "Simple Survey",
        "url": "/1",
        "participant_count": 6,
        "response_rate": 0.8333333333333334,
        "submitted_response_count": 5
      },
      { "name": "Acme Engagement Survey",
        "url": "/2",
        "participant_count": 271,
        "response_rate" :1.0,
        "submitted_response_count":271
      }
    ]
  }

  res.json(data)

});

module.exports = router;
