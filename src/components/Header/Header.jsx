import {element} from 'deku'
import {link} from '../../Router'
import styles from './Header.css'

/* 
  TODO: 
  The router should have the defined list of component names, 
  Should just need should send a component name to link
*/
import Movies from '../../containers/Movies/Movies.jsx'

export default {

  render({context, dispatch}) {

    return (
      <div class={styles.header}>
        <h3 class={styles.text}>Movie Reviews</h3>
        <a class={styles.button} onClick={() => dispatch(link('/', Movies))}>ALL MOVIES</a>
      </div>
    )
  }
}
