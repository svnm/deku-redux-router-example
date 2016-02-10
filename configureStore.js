import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  return store
}
