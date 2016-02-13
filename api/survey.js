var express = require('express');
var router = express.Router();

// any middleware specific to this router here... router.use ...

router.get('/', function(req, res) {

  var data = {
  	"results": { 
  		"name": "Simple Survey",
  		"url": "/survey_results/1",
  		"participant_count": 6,
  		"response_rate":0.833,
  		"submitted_response_count": 5,
  		"themes": [
  			{
  				"name": "The Work",
  				"questions": [
  					{
  						"description": "I like the kind of work I do.",
  						"question_type": "ratingquestion",
  						"survey_responses": [
  							{
  								"id": 1,
  								"question_id": 1,
  								"respondant_id": 1,
  								"response_content": "5"
  							},
  							{ 
  								"id": 6,
  								"question_id": 1,
  								"respondant_id": 2,
  								"response_content": "4"
  							},
  							{
  								"id": 11,
  								"question_id": 1,
  								"respondant_id": 3,
  								"response_content": "5"
  							},
  							{
  								"id": 16,
  								"question_id": 1,
  								"respondant_id": 4,
  								"response_content": "5"
  							},
  							{
  								"id": 21,
  								"question_id": 1,
  								"respondant_id": 5,
  								"response_content": "4"
  							},
  							{
  								"id": 26,
  								"question_id": 1,
  								"respondant_id": 6,
  								"response_content": ""
  							}
  						]
  					},
  					{
  						"description": "In general, I have the resources I need to be effective.",
  						"question_type": "ratingquestion",
  						"survey_responses": [
  							{
  								"id": 2,
  								"question_id": 2,
  								"respondant_id": 1,
  								"response_content": "5"
  							},
  							{
  								"id": 7,
  								"question_id": 2,
  								"respondant_id": 2,
  								"response_content": "5"
  							},
  							{
  								"id": 12,
  								"question_id": 2,
  								"respondant_id": 3,
  								"response_content": "5"
  							},
  							{
  								"id": 17,
  								"question_id": 2,
  								"respondant_id": 4,
  								"response_content": "5"
  							},
  							{
  								"id": 22,
  								"question_id": 2,
  								"respondant_id": 5,
  								"response_content": "5"
  							},
  							{
  								"id": 27,
  								"question_id": 2,
  								"respondant_id": 6,
  								"response_content": ""
  							}
  						]
  					},
  					{
  						"description": "I am appropriately involved in decisions that affect my work.",
  						"question_type": "ratingquestion",
  						"survey_responses": [
  							{
  								"id": 5,
  								"question_id": 5,
  								"respondant_id": 1,
  								"response_content": "4"
  							},
  							{
  								"id": 10,
  								"question_id": 5,
  								"respondant_id": 2,
  								"response_content": "3"
  							},
  							{
  								"id": 15,
  								"question_id": 5,
  								"respondant_id": 3,
  								"response_content": "4"
  							},
  							{
  								"id": 20,
  								"question_id": 5,
  								"respondant_id": 4,
  								"response_content": "4"
  							},
  							{
  								"id": 25,
  								"question_id": 5,
  								"respondant_id": 5,
  								"response_content": "3"
  							},
  							{
  								"id": 30,
  								"question_id": 5,
  								"respondant_id": 6,
  								"response_content":""
  							}
  						]
  					}
  				]
  			}
  		]
  	}
  }

  res.json(data)

});

module.exports = router;
