import {element} from 'deku'
import styles from './SurveyCard.css'
import utils from '../../utils'

function render ({ props, children, context }) {

  // path should be coming through as unique
  const { name, path } = props

  return (
    <div id={'card' + path} class={styles.card}>
      <span>{name}</span>
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
  let percent = utils.toPercent(props.response_rate)
  requestAnimationFrame(mutate(path, percent))
}

function onUpdate ({ props, dispatch }) {
}

function onRemove ({ props, dispatch }) {
}

export default {
  render,
  onCreate,
  onUpdate,
  onRemove
}

function mutate (path, percent) {
  return () => {
    setTimeout(() => {
      //let el = document.querySelector("[id='" + path + "']")
      //let inner = el.querySelector('#inner')
      let el = document.querySelector('#card' + path )
      let inner = el.querySelector('#inner')
      inner.style.width = percent

      let text = el.querySelector('#inner h4')
      text.style.opacity = '1'

    }, 100);
  }
}
