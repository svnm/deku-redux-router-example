import {combineReducers} from 'redux'
import surveys from './surveys'
import survey from './survey'
import router from './router'

const rootReducer = combineReducers({
  surveys,
  survey,
  router
})

export default rootReducer
