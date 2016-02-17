import {element} from 'deku'
import {fetchMovies} from '../../actions/movies'
import utils from '../../utils'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import Movie from '../../containers/Movie/Movie.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import {getPathName} from '../../Router'
import {link} from '../../Router'

export default {

  onCreate ({ path, dispatch }) {
    console.log(path)
    /* dispatch to fetch results */
    dispatch(fetchMovies())
  },

  render({context, dispatch}) {

    let component = null

    if(utils.isEmpty(context.movies.results)){
      component = (<Loader />)
    } else {
      /* results loaded */
      component = context.movies.results.map((m, i) => (
        <a onClick={() => dispatch(link(m.url, Movie ))} >
          <Card key={i} {...m} path={i} />
        </a>
      ))
    }

    return (
      <div>
        <Header />
        {component}
      </div>
    )
  }
}
