import {element} from 'deku'
import {fetchSurveys} from '../../actions/surveys'
import {getPathName} from '../../Router'
import utils from '../../utils'
import SurveyCard from '../SurveyCard/SurveyCard.jsx'
import Header from '../Header/Header.jsx'
import {link} from '../../Router'
import Survey from '../Survey/Survey.jsx'
import Loader from '../Loader/Loader.jsx'

export default {

  onCreate ({ path, dispatch }) {
    console.log(path)
    /* dispatch to fetch survey results */
    dispatch(fetchSurveys())
  },

  render({context, dispatch}) {

    let component = null

    if(utils.isEmpty(context.surveys.results)){
      component = (<Loader />)
    } else {
      /* survey results loaded */
      component = context.surveys.results.map((s, i) => (
        <a onClick={() => dispatch(link(s.url, Survey ))}>
          <SurveyCard key={i} {...s} path={i} />
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
