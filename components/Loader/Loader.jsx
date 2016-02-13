import {element} from 'deku'
import loader from 'css-block-loader'
let styles = {}
Object.assign(styles, loader)

// remove this, it should pick a component by name...
import Surveys from '../Surveys/Surveys.jsx'


export default {

  render({context, dispatch}) {

    return (
      <div class={styles.loader}>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
        <span class={styles.block}></span>
      </div>
    )
  }
}
