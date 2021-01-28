import React, { useState } from 'react'
import "./Search.css"

const Search = (props) => {
  const apiKey = "apikey=a039a4b4"
  const [movieSearch, setMovieSearch] = useState("")
  
  const movieSearchHandler = (event) => {
    event.preventDefault()
    setMovieSearch(event.target.value)
  } 

  const getMovieHandler = (event) => {
    event.preventDefault()
    let currentMovie = movieSearch
    let movieString = movieStringChangeHandler(currentMovie)
    fetch(`http://www.omdbapi.com/?s=${movieString}&${apiKey}`)
    .then(res => res.json())
    .then(res => res.Response !== "True" ? props.errorModalHandler() : res )
    .then(data => {
      props.movieSelectionHandler(data.Search)
    })
    .catch(error => console.log(error.message, props.errorModalHandler(error.message)))
  }

  const movieStringChangeHandler = (title) => {
    return title.trim().toLowerCase().replace(/\s/g, "+")
  }

  const searchReturn = 
    <div className="is-flex is-justify-content-center	">
      <form className="is-flex is-justify-content-center" onSubmit={getMovieHandler}>
        <input className="input" type="text" placeholder="Search..." onChange={movieSearchHandler}/>
        <button className="button is-primary is-outlined" type="submit">Search</button>
      </form>
    </div>

  return searchReturn
  
}

export default Search