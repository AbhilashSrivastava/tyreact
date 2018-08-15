import * as React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/views/home'
import Away from '../src/views/away'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import appReducers from '../src/reducers/app'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import '../src/styles/main.css'

class App extends React.Component<{}, {}> {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/away' component={Away} />
        </Switch>
      </div>
    )
    return (
      <div className='main-wrapper'>
      <Switch>
          <App/>
        </Switch>
      </div>
    )
  }
}

// Add Middlewares
const middlewares = applyMiddleware(logger, reduxThunk)

// Initiate store using reducers & middlewares
const store = createStore(appReducers, {}, middlewares)

// Our React App is mounted here to the html
render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
)
