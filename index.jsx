import Surveys from './components/Surveys/Surveys.jsx'
import Survey from './components/Survey/Survey.jsx'
import {createRouter} from './Router.js'
import styles from './styles/base.css'
import normalize from './styles/normalize.css'
Object.assign(styles, normalize)

let routes = [
  { component: Surveys, path: '/'},
  { component: Survey, path: '/1', params: {id: '2'} },
  { component: Survey, path: '/2', params: {id: '2'} }
]

createRouter(document.getElementById('mount'), routes)
