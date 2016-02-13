import {element} from 'deku'
import utils from '../../utils'
import Stars from '../Stars/Stars.jsx'

function render ({ props, children, context, dispatch }) {

  const { survey_responses } = props

  let responseTotal = 0
  let surveyResponseTotal = 0

  for(var i = 0; i < survey_responses.length; i++){

    if( utils.isEmptyString(survey_responses[i].response_content) ){
      // no response
    } else {
      surveyResponseTotal++
      responseTotal += ( + (survey_responses[i].response_content) )
    }
  }

  let responseAverage = (responseTotal / surveyResponseTotal).toFixed(1)

  return (
    <Stars average={responseAverage} />
  )
}


export default {
  render
}
