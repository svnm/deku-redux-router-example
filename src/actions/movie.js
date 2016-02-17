import * as types from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchMovie(path) {
  return dispatch => {
    return fetch('http://127.0.0.1:5000/api/movie' + path)
      .then(req => req.json())
      .then(json => dispatch(receiveMovie(json)))
  }
}

export function receiveMovie(json) {
  return {
    type: types.RECIEVE_MOVIE,
    json: json,
    receivedAt: Date.now()
  }
}
