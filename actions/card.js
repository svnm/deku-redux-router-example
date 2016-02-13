import * as types from '../constants'

export function setRating(path, percent) {
  let el = document.querySelector('#card' + path )
  let inner = el.querySelector('#inner')
  inner.style.width = percent
  let text = el.querySelector('#inner h4')
  text.style.opacity = '1'

  return {
    type: types.SET_RATING,
    receivedAt: Date.now()
  }

}
