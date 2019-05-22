import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
// import SearchBar from "./SearchBar";

import recipeData from "./recipes";
import Modal from "./Modal";
import useModal from "./UseModal";

function App() {
  const initialFormState = {
    id: null,
    name: "",
    description: "",
    instructions: "",
    image: ""
  };

  // recipes replaces this.state and setRecipes replace this.setState
  const [recipes, setRecipes] = useState([]);

  const { isShowing, toggle } = useModal();

  const [editingRecipe, setEditingRecipe] = useState(false)
  const [clickedRecipe, setClickedRecipe] = useState(initialFormState)

  // componentDidMount // acccepts function we want to run and second empty array
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // ...recipes array of objects, ensures prev recipes remain intact
  const addRecipe = recipe => {
    recipe.id = recipes.length + 1;
    setRecipes([...recipes, recipe]);
    console.log(recipes);
  };

  // delete recipe takes id of recipe and filter out of recipe array
  // function passed throufh props to RecipeIndex
  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

// for button to pass current recipe info into state
  const editRecipe = recipe => {
    setEditingRecipe(true)
    setClickedRecipe({id: recipe.id, name: recipe.name, description: recipe.description, instructions: recipe.instructions, image: recipe.image})
  }

  // updated recipe object and id
  // ternary map through users and find one we want to update
  const updateRecipe = (id, updatedRecipe) => {
    setEditingRecipe(false)
    setRecipes(recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe )))
  }
  // *** TODO: when user inputs something into the search bar
  // const handleSearchInputChange = event => {
  //   let text = event.target.value;
  //   let results;
  //
  //   if (text.length > 1)
  //     results = recipes.filter(recipes =>
  //       recipes.name.includes(text.toLowerCase())
  //     );
  //   else results = recipes;
  //
  //   console.log(results);
  // };

  return (
    <div className="App">
      <NavBar />
      <RecipeHeader>
        <h2> My Recipes </h2>{" "}
          {/* Adding and testing new features for fun */}
        {/* }<SearchBar handleSearchInputChange={handleSearchInputChange} /> */}

        <br/>
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1557895433/chef.png"
            alt="chef-logo"
            style={{ height: "5%", width: "5%" }}
          />{" "}
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554317273/illustration-chef-2.svg"
            alt="chef-logo"
            style={{ height: "8%", width: "8%" }}
          />{" "}
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1557895712/chef2.png"
            alt="chef-logo"
            style={{ height: "5%", width: "5%" }}
          />{" "}
      </RecipeHeader>

      {/* open modal -> add recipe form */}
      <button className="addbtn" style={{ marginTop: "1em" }} onClick={toggle}>
        Add Recipe
      </button>

      <Modal
        isShowing={isShowing}
        addRecipe={addRecipe}
        hide={toggle} />

      {/* recipe container + delete handler */}
      <RecipeIndex
        recipes={recipes}
        editRecipe={editRecipe}
        deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;

const RecipeHeader = styled.header`
  padding-top: 5em;
  text-align: center;
  margin-bottom: 1em;
`;
