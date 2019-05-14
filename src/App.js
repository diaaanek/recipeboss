import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import AddRecipe from "./AddRecipe";
import recipeData from "./recipes";

const App = () => {
  // useState hook directly inside component (instead of class)
  // declare new state variable... "recipes"

  // fetching data
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // const { addRecipe, deleteRecipe, editRecipe } = useRecipes([]);
  const [recipes, setRecipes] = useState([]);

  const initialFormState = {
    id: null,
    name: "",
    decription: "",
    instructions: "",
    image: ""
  };

  const addRecipe = recipe => {
    recipe.id = recipes.length + 1;
    setRecipes([...recipes, recipe]);
  };

  // example fetch w/hooks
  // useEffect(() => {
  //   fetch("http://localhost:3001/images/")
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  // delete recipe
  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // update recipe

  return (
    <div className="App">
      <NavBar />
      <RecipeFormContainer>
        <div style={{ textAlign: "center" }} />
        <h2>Add Recipe</h2>
        <AddRecipe addRecipe={addRecipe} />
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
