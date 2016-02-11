import utils from '../utils'
import * as types from '../constants'

export function setParticipation(path, percent) {
  percent = utils.toPercent(percent)
  let el = document.querySelector('#card' + path )
  let inner = el.querySelector('#inner')
  inner.style.width = percent
  let text = el.querySelector('#inner h4')
  text.style.opacity = '1'

  return {
    type: types.SET_PARTICIPATION,
    receivedAt: Date.now()
  }

}
