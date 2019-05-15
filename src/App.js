import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import AddRecipe from "./AddRecipe";
import recipeData from "./recipes";
import Modal from "./Modal";
import useModal from "./UseModal";

const App = () => {
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // const { addRecipe, deleteRecipe } = useRecipes([]);
  const [recipes, setRecipes] = useState([]);
  const [addingRecipe, setAddingRecipe] = useState(false);
  const { isShowing, toggle } = useModal();

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

  // delete recipe
  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // update recipe

  return (
    <div className="App">
      <NavBar />
      <RecipeFormContainer />
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>
        {" "}
        My Recipes{" "}
      </h2>{" "}
      <div style={{ textAlign: "center" }}>
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
      <button className="addbtn" style={{ marginTop: "1em" }} onClick={toggle}>
        Add Recipe
      </button>
      <Modal isShowing={isShowing} addRecipe={addRecipe} hide={toggle} />
      <RecipeIndex recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;

const RecipeFormContainer = styled.header`
  padding-top: 5em;
  text-align: center;
`;
const Button = styled.div`
  border-radius: 9999;
  background-color: red;
  position: fixed;
  bottom: 0px;
  right: 0px;
`;
