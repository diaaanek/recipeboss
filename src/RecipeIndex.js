import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

// collect operator
const RecipeIndex = ({ recipes, deleteRecipe, ...props }) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <p style={{ fontFamily: "Avenir", paddingTop: "10px" }}>
        {" "}
        Click on a card to flip it over and view instructions!
      </p>
      <CardContainer>
        {recipes.map((recipe, id) => (
          <RecipeCard key={id} {...recipe} deleteRecipe={deleteRecipe} />
        ))}
      </CardContainer>{" "}
    </div>
  );
};

export default RecipeIndex;

const CardContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 30px;
  margin: 1em auto;
  text-rendering: optimizespeed;
`;
