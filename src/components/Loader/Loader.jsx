import {element} from 'deku'
import loader from 'css-block-loader'
let styles = {}
Object.assign(styles, loader)

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
