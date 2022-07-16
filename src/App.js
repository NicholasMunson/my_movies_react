import Search from './components/Search'
import TitleViewer from './components/TitleViewer'
import Pagination from "./components/Pagination"
import { useState } from 'react'
import './App.css';

const App = () => {
  const [currentMovieSelection, setMovieSelection] = useState([])

  const movieSelectionHandler = (movieData) => {
    setMovieSelection(movieData)
  }

  return (
    <div className="App">
      <h1 className="title"> Search for your favorite movie poster below</h1>
      <Search movieSelectionHandler={movieSelectionHandler}/>
      <TitleViewer titles={currentMovieSelection}/>
      <Pagination />
    </div>
  );
}

export default App;
