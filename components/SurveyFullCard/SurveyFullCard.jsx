import {element} from 'deku'
import {setParticipation} from '../../actions/card'
import styles from './SurveyFullCard.css'
import Theme from '../Theme/Theme.jsx'

function render ({ props, children, context }) {

  const { name, path, themes } = props

  let themeList = themes.map((t, i) => (
    <Theme {...t} />
  ))

  return (
    <div id={'card' + path} class={styles.card}>
      <h3 class={styles.name}>{name}</h3>
      <div class={styles.outer}>
        <div id='inner' class={styles.inner}>
          <h4 class={styles.text}>Participation</h4>
        </div>
      </div>
      {themeList}
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
  const { name, path } = props
  requestAnimationFrame( 
    mutate(path, props.response_rate, dispatch)
  )
}

function mutate ( path, percent, dispatch) {
  return () => {
    setTimeout(() => {
      dispatch(setParticipation(path, percent))
    }, 200);
  }
}

export default {
  render,
  onCreate
}
