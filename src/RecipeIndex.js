import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

const RecipeIndex = ({ recipes, ...props }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554317273/illustration-chef-2.svg"
        alt="chef-logo"
        style={{ height: "5%", width: "5%", paddingTop: "5rem" }}
      />
      <br />
      <h2 style={{ textAlign: "center" }}> My Recipes </h2>{" "}
      <CardContainer>
        {recipes.map((recipe, id) => (
          <CardWrapper>
            <Image
              width="250px"
              height="230px"
              src={recipe.image}
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
              }}
            />
            <h3 style={{ margin: "0.5rem" }}>{recipe.name}</h3>
            <Description>
              <p style={{ margin: "0.5rem", fontSize: "12px" }}>
                {recipe.description}
              </p>
              <p style={{ margin: "0.5rem", fontSize: "12px" }}>
                {recipe.instructions}
              </p>
            </Description>

            <div
              id="ing-buttons"
              className="close"
              style={{
                position: "absolute",
                top: "0",
                right: "2%"
              }}
            >
              {" "}
              <button
                style={{ backgroundColor: "Transparent", border: "none" }}
                className="delete btn"
                onClick={() => props.deleteRecipe(recipe.id)}
              >
                <img
                  src="https://image.flaticon.com/icons/png/128/148/148766.png"
                  alt="delete-btn"
                  style={{ height: "27px", width: "25px", paddingTop: ".25em" }}
                />
              </button>
            </div>
          </CardWrapper>
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

const CardWrapper = styled.div`
  background-color: white;

  width: 250px;
  height: 350px;
  cursor: pointer;
  float: left;
  margin: 0.75rem;
  position: relative;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 5px;
  overflow: hidden;

  display: inline-block;
  position: relative;
`;

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`;

export const Description = styled.div`
  position: relative;
  overflow: auto;
  font-family: "Avenir";
  height: 80px;
  width: 254px;
`;
