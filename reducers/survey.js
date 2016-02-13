export default function(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_SURVEY':
      return Object.assign({}, 
      	state,
      	action.json.results
      )
    default:
      return state;
  }
}
