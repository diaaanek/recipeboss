import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
// import AddRecipeForm from "./AddRecipeForm";
import recipeData from "./recipes";

function App() {
  // useState hook directly inside component (instead of class)
  // declare new state variable... "recipies"
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  //  Add Recipe
  // const addRecipes = recipe => {
  //   recipe.id = recipe.length + 1;
  //   setRecipes([...recipes, recipes]);
  // };

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="App">
      <NavBar />
      <RecipeForm>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554317273/illustration-chef-2.svg"
            alt="chef-logo"
            style={{ height: "5%", width: "5%" }}
          />
        </div>
        <h2>Add Recipe</h2>
        {/*} <AddRecipeForm addRecipe={addRecipe} /> */}
      </RecipeForm>

      <RecipeIndex recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;

const RecipeForm = styled.header`
  padding-top: 5em;
  text-align: center;
`;
