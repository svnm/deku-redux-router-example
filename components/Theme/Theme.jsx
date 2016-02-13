import {element} from 'deku'
import styles from './Theme.css'
import Response from '../Response/Response.jsx'

function render ({ props, children, context, dispatch }) {

  const { name, questions } = props

  let questionsList = questions.map((q, i) => (
    <div>
      <p>{q.description}</p>
      <Response {...q} />
    </div>
  ))

  return (
    <div class={styles.theme}>
      <h3 class={styles.text}>{name}</h3>
      {questionsList}
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
