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
      className="flexContainer"
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
      <br />

      <button className="addbtn">Add new recipe</button>
    </form>
  );
};

export default AddRecipe;
