import * as types from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchMovies() {
  return dispatch => {
    return fetch('http://127.0.0.1:5000/api/movies')
      .then(req => req.json())
      .then(json => dispatch(receiveMovies(json)))
  }
}

export function receiveMovies(json) {
  return {
    type: types.RECIEVE_MOVIES,
    json: json,
    receivedAt: Date.now()
  }
}
