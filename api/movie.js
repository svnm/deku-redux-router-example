var express = require('express');
var router = express.Router();

// any middleware specific to this router here... router.use ...

router.get('/:id', function(req, res) {

  var data = {}
  var id = req.params.id

  if (id == undefined) {
    console.log('could not find id for movie route');
  }

  /* simulating a database for reviews */
  if(id == '1'){

    data = {
      "results": { 
        "name": "Gleaming the Cube",
        "rating": 0.93,
        "imageUrl": "/build/img/gleaming.jpg",
        "reviews": [
          {
            "name": "Steven Iseki",
            "description": "I think this movie is really quite awesome.",
            "stars": "4.8"
          },
          {
            "name": "JamesZ Martin",
            "description": "I think this movie is pretty bad, but has some cool skating.",
            "stars": "3.3"
          }
        ]
      }
    }

  } else if (id == '2') {

    data = {
      "results": { 
        "name": "Prayer of the Rollerboys",
        "rating": 0.95,
        "imageUrl": "/build/img/prayer.jpg",
        "reviews": [
          {
            "name": "Steven Iseki",
            "description": "This is the best movie of all time.",
            "stars": "5.0"
          },
          {
            "name": "JamesZ Martin",
            "description": "The roller blading is the only good part of this movie!",
            "stars": "2.6"
          }
        ]
      }
    }

  } else {

    data = {
      "results": { }
    }
  }

  res.json(data)

});

module.exports = router;
