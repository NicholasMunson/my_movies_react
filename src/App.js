import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from './components/Search'
import TitleViewer from './components/TitleViewer'
import ErrorModal from './components/ErrorModal'
import Header from './components/Header'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [currentMovieSelection, setMovieSelection] = useState([])
  const [errorModal, setErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

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

  const errorHandler = 
    errorModal !== false ? 
    <ErrorModal errorResetHandler={errorResetHandler} errorMessage={errorMessage} /> :
    <TitleViewer titles={currentMovieSelection} errorModal={errorModal}/>
  

  return (
    <Router>
      <div className="App">
      
        <Route exact path='/'>
          <Header />
          <h1 className="title"> Find a movie below</h1>
          <Search movieSelectionHandler={movieSelectionHandler} errorModalHandler={errorModalHandler}/>
          { errorHandler }
        </Route>

        <Route path='/about'>
          <Header />
        </Route>

        <Route path='/collection'>
          <Header />
        </Route>
        
      </div>
    </Router>
  )
}

export default App;
