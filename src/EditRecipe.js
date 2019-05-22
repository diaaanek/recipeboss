import React, { useState } from "react";
import { fetchImages } from "./unsplashapi";

const EditRecipe = (props, isShowing, hide) => {
  const [recipe, setRecipe] = useState(props.currentRecipe);

  const [searchResults, setSearchResults] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // event for user search on image input field
  const searchImage = event => {
    fetchImages(recipe.image).then(results =>
      setSearchResults(results.results)
    );
  };

  // set clicked for chosen image from unsplash results
  const chosenImage = event => {
    setClickedImage(event.target.src);
  };

  // submitting form back to App (passed down as props)
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateRecipe(recipe.id);
      }}
    >
      <label>Recipe Name</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleInputChange}
      />
      <br />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={recipe.description}
        onChange={handleInputChange}
      />
      <br />
      <label>Instructions</label>
      <input
        type="text"
        name="instructions"
        value={recipe.instructions}
        onChange={handleInputChange}
      />
      <br />

      <label>Image Term</label>
      <input
        type="text"
        name="image"
        value={recipe.image}
        onChange={handleInputChange}
      />
      <div className="images">
        {searchResults
          ? searchResults.map(image => (
              <img
                className="selected-img"
                style={{
                  height: "100px",
                  width: "100px",
                  margin: "7px"
                }}
                key={image.id}
                src={image.urls.thumb}
                alt={image.alt_description}
                onClick={chosenImage}
              />
            ))
          : null}
      </div>

      <button
        id="searchbtn"
        className="addbtn"
        type="button"
        onClick={searchImage}
        style={{ marginTop: "1em" }}
      >
        Search an Image
      </button>
      <br />

      <button
        onClick={() => props.setEditedRecipe(false)}
        className="addbtn"
        style={{ marginBottom: "1em" }}
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipe;
