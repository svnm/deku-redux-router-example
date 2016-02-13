export default function(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_PATHNAME':
      return Object.assign({}, 
      	state, 
      	{ pathname: action.pathname }
      )
    default:
      return state;
  }
}
