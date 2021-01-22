import "./TitleViewer.css"

const TitleViewer = (props) => {
  let titles = props.titles
  const movies = titles.map(title => 
    <li className="card" key={title.imdbID}>
      <p className="card-header-title is-centered">{title.Title}</p>
      <figure className="image-container">
        <img className="image is-centered" src={title.Poster} alt={title.Title + ` movie poster`} />
      </figure>
    </li>
  )
  return(
    <ul className="is-flex is-flex-wrap-wrap">{movies}</ul>
  )
}
export default TitleViewer