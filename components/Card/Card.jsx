import {element} from 'deku'
import {setRating} from '../../actions/card'
import styles from './Card.css'
import utils from '../../utils'

function render ({ props, children, context }) {

  const { name, path, rating } = props

  const percent = utils.toPercent(rating)

  return (
    <div id={'card' + path} class={styles.card}>
      <h3 class={styles.name}>{name}</h3>
      <div class={styles.outer}>
        <div id='inner' class={styles.inner}>
          <h4 class={styles.text}>{percent}</h4>
        </div>
      </div>
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
  const { rating, path } = props
  const percent = utils.toPercent(rating)
  requestAnimationFrame(mutate(path, percent, dispatch))
}

function mutate ( path, percent, dispatch) {
  return () => {
    setTimeout(() => {
      dispatch(setRating(path, percent))
    }, 200);
  }
}

export default {
  render,
  onCreate
}
