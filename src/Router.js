import {dom, element} from 'deku'
import { createHistory } from 'history'
import utils from './utils'
import * as types from './constants'

import configureStore from './configureStore'
let store = configureStore()

let routes = []
let render = null
let history = null
let initialLoad = true

export function createRouter (domNode, appRoutes) {

  // set the routes
  routes = appRoutes

  // Creating renderer
  render = dom.createRenderer(domNode, store.dispatch)

  // setup History listener
  setupHistory()

  // subscribe to store changes
  store.subscribe(() => updateStore())

}


function updateStore() {
  renderApplication()
}


function renderApplication() {
  console.log(location.pathname)
  let Component = matchPath(location.pathname)
  render(<Component />, store.getState())
}

function matchPath (path) {
  let component = null

  routes.map(m => {
    if(m.path === path){
      component = m.component
    }
  })

  console.log(component)
  return component

}

/* listen for a change of route, and update the container */
export function setupHistory () {

  history = createHistory()

  let unlisten = history.listen(location => {

    // we have navigated to a component via back button, or initial page load
    console.log('u loaded, now load a container')
    renderApplication()

  })

}

/* changing a route, history pushed with the component name, id as state */
export function link (path, Component) {
  return () => {
    history.push({
      pathname: path
    })
  }
}

/* get the current pathname of the route */
export function getPathName() {
  return {
    type: types.RECIEVE_PATHNAME,
    pathname: location.pathname,
    receivedAt: Date.now()
  }
}
