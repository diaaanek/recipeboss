import React, { useState } from "react";

const AddRecipe = props => {
  const initialFormState = {
    id: null,
    name: "",
    decription: "",
    instructions: "",
    image: ""
  };

  const [recipe, setRecipe] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRecipe({ ...recipe, [name]: value });
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
      {/* ADD SEARCH FUNCTIONALITY HERE */}
      <label>Image (url)</label>
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

export default AddRecipe;
