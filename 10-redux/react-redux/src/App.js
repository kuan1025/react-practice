import React, { Component } from 'react'
import Count from './container/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      // pass counter store to container
      // <Count store = {store} />
      // index.js  Provider pass counter store to container
      <Count />
    )
  }
}
