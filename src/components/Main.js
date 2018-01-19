import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import CourseContainer from '../containers/CourseContainer'
import Header from '../components/Header'
import '../assets/global.css'
import {
  Router,
  Route
} from 'react-router'
import history from '../utils/history'

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={HomeContainer} />
          <Route path='/c/:id' component={CourseContainer} />
        </div>
      </Router>
    )
  }
}

export default Main
