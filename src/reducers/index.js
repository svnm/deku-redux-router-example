import {combineReducers} from 'redux'
import movies from './movies'
import movie from './movie'
import router from './router'

const rootReducer = combineReducers({
  movies,
  movie,
  router
})

export default rootReducer
