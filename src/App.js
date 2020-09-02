import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Watched } from './components/Watched'
import { Watchlist } from './components/Watchlist'
import { Add } from './components/Add'
import './App.css'
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Watchlist} />
        <Route exact path='/watched' component={Watched} />
        <Route exact path='/add' component={Add} />
        <Route render={() => '404 Page not found'} />
      </Switch>
    </Router>
  )
}

export default App
