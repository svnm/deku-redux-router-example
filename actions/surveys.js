import * as types from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchSurveys() {
  return dispatch => {
    return fetch('http://127.0.0.1:3000')
      .then(req => req.json())
      .then(json => dispatch(receiveSurveys(json)))
  }
}

export function receiveSurveys(json) {
  return {
    type: types.RECIEVE_SURVEYS,
    json: json,
    receivedAt: Date.now()
  }
}
