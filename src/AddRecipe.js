import React, { useState } from "react";
import { fetchImages } from "./unsplashapi";

const AddRecipe = (props, isShowing, hide) => {
  // initial state with empty values
  const initialFormState = {
    id: null,
    name: "",
    decription: "",
    instructions: "",
    image: ""
  };

  const [recipe, setRecipe] = useState(initialFormState);

  const [searchResults, setSearchResults] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);

  // event => function to update state in form
  // *** Object destructuring get name and key value
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

  console.log(searchResults);

  // submitting form back to App (passed down as props)
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (
          !recipe.name ||
          !recipe.description ||
          !recipe.instructions ||
          !recipe.image
        )
          return alert("Enter all fields below!");

        props.addRecipe({ ...recipe, image: clickedImage });
        setRecipe(initialFormState);
      }}
    >
      <label>Recipe Name</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        placeholder="Blueberry Pie..."
        onChange={handleInputChange}
      />
      <br />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={recipe.description}
        placeholder="Amazing pie all for yourself or family"
        onChange={handleInputChange}
      />
      <br />
      <label>Instructions</label>
      <input
        type="text"
        name="instructions"
        value={recipe.instructions}
        placeholder="Place pie in the oven..."
        onChange={handleInputChange}
      />
      <br />

      <label>Image Term</label>
      <input
        type="text"
        name="image"
        placeholder="Ex. Pie"
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

      <button className="addbtn" style={{ marginBottom: "1em" }}>
        Add New Recipe
      </button>
    </form>
  );
};

export default AddRecipe;
