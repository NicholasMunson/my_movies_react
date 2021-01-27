import "./ErrorModal.css"

const ErrorModal = (props) => {
  let messageTitle = "Oops, something went wrong..."  
  let errorMessage = "Looks like we cannot find that movie. Please try again."
  let message = props.errorMessage === "Cannot read property 'Search' of undefined" ? errorMessage : props.errorMessage

  const errorModal = 
    <div className="modal" style={{display: "inline"}}>
      <div className="modal-background">
        <div className="modal-content ">
          <article className="message is-danger is-medium">
            <div className="message-header">
              <p>{messageTitle}</p>
              <button className="delete " aria-label="delete" onClick={props.errorResetHandler}></button>
            </div>
            <p className="message-body">{message}</p>
          </article>
        </div>
      </div>
    </div>

  return errorModal
}

export default ErrorModal