// import { getNodeText } from '@testing-library/react'
import React, { useState } from 'react'



const Search = (props) => {
  const apiKey = "apikey=a039a4b4"
  const [movieSearch, setMovieSearch] = useState("")

  const movieSearchHandler = (event) => {
    event.preventDefault()
    setMovieSearch(event.target.value)
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const getMovieHandler = () => {
    let currentMovie = movieSearch
    let movieString = movieStringChangeHandler(currentMovie)
    fetch(`http://www.omdbapi.com/?s=${movieString}&${apiKey}`)
    .then(res => res.json())
    .then(res => res.Response === "True" ? res : alert(res.Error + " Please try another selection."))
    .then(data => {
      props.movieSelectionHandler(data.Search)
      console.log(data)
    })
    .catch(error => console.log(error.message))
  }

  const movieStringChangeHandler = (title) => {
    return title.trim().toLowerCase().replace(/\s/g, "+")
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="is-flex is-justify-content-center	">
        <input className="input" type="text" placeholder="Search..." onChange={movieSearchHandler}/>
        <button className="button is-primary is-outlined" onClick={getMovieHandler}>Search</button>
      </div>
    </form>
  )
}

export default Search