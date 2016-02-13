import * as types from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchSurvey(path) {
  return dispatch => {
    return fetch('http://127.0.0.1:3003/api/survey' + path)
      .then(req => req.json())
      .then(json => dispatch(receiveSurvey(json)))
  }
}

export function receiveSurvey(json) {
  return {
    type: types.RECIEVE_SURVEY,
    json: json,
    receivedAt: Date.now()
  }
}
