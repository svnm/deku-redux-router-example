import {element} from 'deku'
import {setParticipation} from '../../actions/card'
import styles from './SurveyCard.css'

function render ({ props, children, context }) {

  const { name, path } = props

  return (
    <div id={'card' + path} class={styles.card}>
      <h3 class={styles.name}>{name}</h3>
      <div class={styles.outer}>
        <div id='inner' class={styles.inner}>
          <h4 class={styles.text}>Participation</h4>
        </div>
      </div>
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
  const { name, path } = props
  requestAnimationFrame(mutate(path, props.response_rate, dispatch))
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
