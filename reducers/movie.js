export default function(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_MOVIE':
      return Object.assign({}, 
      	state,
      	action.json.results
      )
    default:
      return state;
  }
}
