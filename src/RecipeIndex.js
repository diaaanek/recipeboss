import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

const RecipeIndex = ({ recipes, ...props }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554317273/illustration-chef-2.svg"
        style={{ height: "5%", width: "5%", paddingTop: "5rem" }}
      />
      <br />
      <h2 style={{ textAlign: "center" }}> My Recipes </h2>{" "}
      <CardContainer>
        {recipes.map((recipe, id) => (
          <RecipeCard key={id} {...recipe} />
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
  margin: 2em auto;

  text-rendering: optimizespeed;
`;
