import React from "react";
import ReactDOM from "react-dom";

import AddRecipe from "./AddRecipe";
// import EditRecipe from "./EditRecipe";

// createPortal => render children outside the main DOM heirarchy of parent component w/o losing react context
// use portal to mount modal compoent to end of document.body element rather than a child of other component
const Modal = ({  isShowing, hide, addRecipe}) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal">
            <button
              style={{
                backgroundColor: "Transparent",
                border: "none"
              }}
              className="delete-btn"
              aria-label="Close"
              onClick={hide}
            >
              <img
                src="https://image.flaticon.com/icons/png/128/148/148766.png"
                alt="delete-btn"
                style={{
                  height: "27px",
                  width: "25px",
                  paddingTop: ".25em"
                }}
              />
            </button>

            <p>
              {" "}
                <AddRecipe addRecipe={addRecipe} onClick={hide} isShowing={isShowing} />

            </p>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
