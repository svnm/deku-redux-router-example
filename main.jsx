import Surveys from './components/Surveys/Surveys.jsx'
import Survey from './components/Survey/Survey.jsx'
import {createRouter} from './Router.js'
import styles from './styles/base.css'

let routes = [
  { component: Surveys, path: '/'},
  { component: Survey, path: '/survey_results/1', params: {id: '2'} },
  { component: Survey, path: '/survey_results/2', params: {id: '2'} }
]

createRouter(document.getElementById('mount'), routes)
