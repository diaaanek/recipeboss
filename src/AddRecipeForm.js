import React, { useState } from "react";

const AddRecipeForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    decription: "",
    instructions: "",
    image: ""
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRecipes({ ...recipes, [name]: value });
  };

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
          return;

        props.addRecipe(recipe);
        setRecipe(initialFormState);
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
      <label>Image</label>
      <input
        type="text"
        name="image"
        value={recipe.image}
        onChange={handleInputChange}
      />
      <br />
      <button>Add new recipe</button>
    </form>
  );
};

export default AddRecipeForm;
