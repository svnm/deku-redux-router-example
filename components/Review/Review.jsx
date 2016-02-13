import {element} from 'deku'
import styles from './Review.css'
import Stars from '../Stars/Stars.jsx'

function render ({ props, children, context, dispatch }) {

  const { name, description, stars } = props

  return (
    <div class={styles.reviews}>
      <h3 class={styles.text}>
        {name}
      </h3>
      <div>
        <p>{description}</p>
        <Stars average={stars} />
    </div>
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
  const { name, path } = props
}

export default {
  render,
  onCreate
}
