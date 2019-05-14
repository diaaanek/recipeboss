import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
// import AddRecipeForm from "./AddRecipeForm";
import recipeData from "./recipes";

const App = () => {
  // useState hook directly inside component (instead of class)
  // declare new state variable... "recipies"

  // fetching data
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // const { addRecipe, deleteRecipe, editRecipe } = useRecipes([]);
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    recipe.id = recipes.length + 1;
    setRecipes([...recipes, recipe]);
  };

  // useEffect(() => {
  //   fetch("http://localhost:3001/links/")
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="App">
      <NavBar />
      <RecipeFormContainer>
        <div style={{ textAlign: "center" }} />
        <h2>Add Recipe</h2>
      </RecipeFormContainer>

      <RecipeIndex recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;

const RecipeFormContainer = styled.header`
  padding-top: 5em;
  text-align: center;
`;
