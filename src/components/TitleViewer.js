import "./TitleViewer.css"

const TitleViewer = (props) => {
  let titles = props.titles
  let noPoster = "https://sd.keepcalms.com/i-w600/keep-calm-but-sorry-no-poster.jpg"

  const movies = titles.map(title => 
    <li className="card has-background-light" key={title.imdbID}>
      <p className="card-header-title is-centered ">{title.Title}</p>
      <figure className="image-container">
        <img className="image is-centered " src={title.Poster !== "N/A" ? title.Poster : noPoster } alt={title.Title + ` movie poster`} />
      </figure>
    </li>
  )

  const titleViewerReturn =   
    <ul 
      className=" box is-flex is-flex-wrap-wrap is-justify-content-center has-background-white-ter is-flex-grow-5" 
      style={{visibility: (titles.length !== 0 ?  "visible" : "hidden") }}
      >
        {movies}
    </ul>
  
  return titleViewerReturn

}
export default TitleViewer