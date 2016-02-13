import Movies from './containers/Movies/Movies.jsx'
import Movie from './containers/Movie/Movie.jsx'
import {createRouter} from './Router.js'
import styles from './styles/base.css'
import normalize from './styles/normalize.css'
Object.assign(styles, normalize)

let routes = [
  { component: Movies, path: '/'},
  { component: Movie, path: '/1', params: {id: '1'} },
  { component: Movie, path: '/2', params: {id: '2'} }
]

createRouter(document.getElementById('mount'), routes)
