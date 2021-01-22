import Search from './components/Search'
import TitleViewer from './components/TitleViewer'
import { useState } from 'react'
import './App.css';

const App = () => {
  const [currentMovieSelection, setMovieSelection] = useState([])

  const movieSelectionHandler = (movieData) => {
    setMovieSelection(movieData)
  }

  return (
    <div className="App">
      <h1 className="title"> Find a movie below</h1>
      <Search movieSelectionHandler={movieSelectionHandler}/>
      <TitleViewer titles={currentMovieSelection}/>
    </div>
  );
}

export default App;
