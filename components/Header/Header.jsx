import {element} from 'deku'
import {link} from '../../Router'
import styles from './Header.css'

// remove this, it should pick a component by name...
import Surveys from '../Surveys/Surveys.jsx'


export default {

  onCreate ({ path }) {
    console.log(path)
  },

  render({context, dispatch}) {

    return (
      <div class={styles.header}>
        <h3 class={styles.text}>ACME Surveys</h3>
        <a class={styles.button} onClick={() => dispatch(link('/', Surveys))}>ALL SURVEYS &nbsp;</a>
      </div>
    )
  }
}
