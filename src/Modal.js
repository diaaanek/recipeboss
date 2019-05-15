import React from "react";
import ReactDOM from "react-dom";

import AddRecipe from "./AddRecipe";

const Modal = ({ isShowing, hide, addRecipe }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  style={{
                    backgroundColor: "Transparent",
                    border: "none"
                  }}
                  className="delete btn"
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
              </div>
              <p>
                {" "}
                <AddRecipe addRecipe={addRecipe} />
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
