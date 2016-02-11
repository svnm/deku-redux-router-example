import {element} from 'deku'
import styles from './Stars.css'

function render ({ props, context, dispatch }) {

  const { average } = props

  let division = Math.floor(average/1)

  let starElems = []

  for(var i = 0; i < division; i++){
    starElems.push(<span class={styles.star}>☆</span>)
  }

  /* 
    TODO: add half stars, but it won't work like this, 
    Need some fancy svg's or css psuedo selectors 
  */
  let remainder = average % 1

  return (
    <div class={styles.stars}>
      <h3 class={styles.text}>{`${average} / 5`}</h3>
      {starElems}
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
}

export default {
  render,
  onCreate
}
