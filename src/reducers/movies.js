export default function(state = [], action) {
  switch (action.type) {
    case 'RECIEVE_MOVIES':
      return Object.assign({}, 
      	state, 
      	{ results: action.json.results}
      )
    default:
      return state;
  }
}
