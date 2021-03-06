import React, { Component } from 'react'
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact' 
class App extends Component {
  render() {
    return (
        <Router>
      <PageWrapper>

          <Route
          exact={true}
          path="/"
          component={Home}
          />

         
          <Route 
          path='/about'
          component={About}
          />
        <Route 
        path='/Contact'
        component={Contact}/>


      </PageWrapper>
        </Router>



    )
  }
}

export default App
