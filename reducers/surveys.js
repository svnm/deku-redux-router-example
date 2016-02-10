export default function(state = [], action) {
  switch (action.type) {
    case 'RECIEVE_SURVEYS':
      return Object.assign({}, state, {
      	surveys: action.json.survey_results
      })
    default:
      return state;
  }
}
