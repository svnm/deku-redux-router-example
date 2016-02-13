import {element} from 'deku'
import {fetchSurvey} from '../../actions/survey'
import {getPathName} from '../../Router'
import utils from '../../utils'
import SurveyFullCard from '../SurveyFullCard/SurveyFullCard.jsx'
import Header from '../Header/Header.jsx'
import Loader from '../Loader/Loader.jsx'

export default {

  onCreate ({ path, dispatch}) {
    dispatch(fetchSurvey(location.pathname))
  },

  render({context, dispatch}) {

    /*
      TODO: location.pathname is being stored in router, but is not really used.
      Also when changing from one route to another the component should change to loader, 
      This should hopefully work well if the pathname was correctly used from context.router
    */

    let component = null

    if(utils.isEmpty(context.survey)){
      component = (<Loader />)
    } else {

      /* survey results loaded */
      component = (
        <SurveyFullCard {...context.survey} path='fullCard' />
      )
    }

    return (
      <div>
        <Header />
        {component}
      </div>
    )
  }
}
