import {element} from 'deku'
import {fetchSurvey} from '../../actions/survey'
import {getPathName} from '../../Router'
import utils from '../../utils'
import SurveyCard from '../SurveyCard/SurveyCard.jsx'
import Header from '../Header/Header.jsx'

export default {

  onCreate ({ path, dispatch}) {

    console.log('die')
    dispatch(fetchSurvey(location.pathname))
  },

  render({context, dispatch}) {

    let component = null

    if(utils.isEmpty(context.router.pathname)){
      /* dispatch to get the pathname */
      //dispatch(getPathName())
      /* dispatch to fetch survey results */
      //dispatch(fetchSurvey(location.pathname))
    }

    if(location.pathname !== context.router.pathname){
      //component = (<span>loading...</span>)
    }

    if(utils.isEmpty(context.survey.survey)){
      component = (<span>loading...</span>)
    } else {
      /* survey results loaded */
      component = (
        <div>{context.survey.survey.name}</div>
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
