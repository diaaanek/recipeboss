import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

const RecipeIndex = ({ recipes, ...props }) => {
  return (
    <div>
      <CardContainer>
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} {...recipe} />
        ))}
      </CardContainer>{" "}
    </div>
  );
};

export default RecipeIndex;

const CardContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 30px;
  margin: 2em auto;

  text-rendering: optimizespeed;
`;
