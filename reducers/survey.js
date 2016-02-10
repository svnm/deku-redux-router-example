export default function(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_SURVEY':
      return Object.assign({}, state, {
        survey: action.json.survey_result_detail
      })
    default:
      return state;
  }
}
