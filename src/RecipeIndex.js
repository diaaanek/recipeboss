import React from "react";
import RecipeCard from "./RecipeCard";
import NativeAd from "./NativeAd";
import styled from "styled-components";

// collect operator
const RecipeIndex = ({ recipes, editRecipe, deleteRecipe, ...props }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <p style={{ fontFamily: "Avenir", paddingTop: "10px" }}>
        {" "}
        Click on a card to flip it over and view instructions!
      </p>
      <CardContainer>
        <NativeAd />

        {recipes.map((recipe, id) => (
          <RecipeCard
            key={id}
            {...recipe}
            deleteRecipe={deleteRecipe}
            editRecipe={editRecipe}

          />
        ))}
      </CardContainer>{" "}
    </div>
  );
};

export default RecipeIndex;

const CardContainer = styled.div`
  padding-top: 1rem;
  // flexbox grid
  display: flex;
  flex-direction: row;
  // make mobile responsive
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 30px;
  margin: 1em auto;
  text-rendering: optimizespeed;
`;
