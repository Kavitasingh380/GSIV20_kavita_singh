import React from 'react'
import { createHashHistory } from 'history';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Details from '../modules/details';
import Movies from '../modules/movie';



import createStore from '../store/createStore'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={Movies} />
            <Route exact path="/details" component={Details} />
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App