import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

import recipeData from "./recipes";
import Modal from "./Modal";
import useModal from "./UseModal";

const App = () => {
  // getter and setter for each type of state - no limit
  // recipes replaces this.state and setRecipes replace this.setState
  const [recipes, setRecipes] = useState([]);

  // custom Hook for Modal
  const { isShowing, toggle } = useModal();

  // side effects, similar to componentDidMount, acccepts function we want to run and second empty array
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // add recipe (auto-incrementing id)
  // ...recipes array of objects, ensures prev recipes remain intact
  const addRecipe = recipe => {
    recipe.id = recipes.length + 1;
    setRecipes([...recipes, recipe]);
  };

  // delete recipe takes id of recipe and filter out of recipe array
  // function passed throufh props to RecipeIndex
  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // *** TODO: when user inputs something into the search bar //
  const handleSearchInputChange = event => {
    let text = event.target.value;
    let results;
    if (text.length > 1)
      results = recipes.filter(recipes =>
        recipes.name.includes(text.toLowerCase())
      );
    else results = recipes;
    setRecipes(results);
    console.log(results);
  };

  return (
    <div className="App">
      <NavBar />
      <RecipeHeader>
        <h2> My Recipes </h2>{" "}
        <div style={{ textAlign: "center" }}>
          {/* Adding and testing new features for fun */}
          {/* }<SearchBar handleSearchInputChange={handleSearchInputChange} /> */}
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
        </div>
      </RecipeHeader>

      {/* open modal -> add recipe form */}
      <button className="addbtn" style={{ marginTop: "1em" }} onClick={toggle}>
        Add Recipe
      </button>

      <Modal isShowing={isShowing} addRecipe={addRecipe} hide={toggle} />

      {/* recipe container + delete handler + eventually EDIT functionality */}
      <RecipeIndex recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;

const RecipeHeader = styled.header`
  padding-top: 5em;
  text-align: center;
  margin-bottom: 1em;
`;
