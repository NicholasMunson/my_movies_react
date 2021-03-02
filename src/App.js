import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react'

import Search from './components/Search'
import TitleViewer from './components/TitleViewer'
import ErrorModal from './components/ErrorModal'
import Header from './components/Header'
import About from './components/About'
import Collection from './components/Collection'
import Login from './components/Login'

import './App.css'

const App = () => {
  const [currentMovieSelection, setMovieSelection] = useState([])
  const [errorModal, setErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const movieSelectionHandler = (movieData) => {
    setMovieSelection(movieData)
  }

  const errorModalHandler = (message) => {
    setErrorModal(true)
    setErrorMessage(message)
  } 

  const errorResetHandler = () => {
    setErrorModal(false)
    setErrorMessage("")
  }

  const loginHandler = () => {
    console.log(`The logged in status is ${loggedInStatus}`)
    let status = loggedInStatus
    setLoggedInStatus(!status)
  }

  const errorOrTitle = 
    errorModal !== false ? 
    <ErrorModal errorResetHandler={errorResetHandler} errorMessage={errorMessage} /> :
    <TitleViewer titles={currentMovieSelection} errorModal={errorModal}/>
  
  const collectionOrLogin = 
    loggedInStatus === true ? 
    <Collection loginHandler={loginHandler}  /> : 
    <Login loginHandler={loginHandler} /> 
  

  return (
    <Router>
      <div className="App">
      
        <Route exact path='/'>
          <Header />
          <h1 className="title"> Find a movie below</h1>
          <Search movieSelectionHandler={movieSelectionHandler} errorModalHandler={errorModalHandler}/>
          { errorOrTitle }
        </Route>

        <Route path='/about'>
          <Header />
          <About />
        </Route>

        <Route path='/collection'>
          <Header />
          { collectionOrLogin }
        </Route>
        
      </div>
    </Router>
  )
}

export default App;
