import Search from './components/Search'
import TitleViewer from './components/TitleViewer'
import ErrorModal from './components/ErrorModal'
import Header from './components/Header'
import { useState } from 'react'
import './App.css';

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

  return (
    <div className="App">
      <Header />
      <h1 className="title"> Find a movie below</h1>
      <Search movieSelectionHandler={movieSelectionHandler} errorModalHandler={errorModalHandler}/>
      { 
        errorModal !== false ? 
        <ErrorModal errorResetHandler={errorResetHandler} errorMessage={errorMessage} /> :
        <TitleViewer titles={currentMovieSelection} errorModal={errorModal}/>
      }
    </div>
  );
}

export default App;
