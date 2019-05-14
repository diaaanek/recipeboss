import React from "react";
import styled from "styled-components";

const RecipeCard = recipe => {
  return (
    <CardWrapper>
      <Image
        width="250px"
        height="230px"
        src={recipe.image}
        style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
      />
      <h3 style={{ margin: "0.5rem" }}>{recipe.name}</h3>
      <p style={{ margin: "0.5rem", fontSize: "12px", fontFamily: "Avenir" }}>
        {recipe.description}
      </p>
      <p style={{ margin: "0.5rem", fontSize: "12px", fontFamily: "Avenir" }}>
        {recipe.instructions}
      </p>

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
          onClick={() => console.log(recipe.id)}
        >
          <img
            src="https://image.flaticon.com/icons/png/128/148/148766.png"
            style={{ height: "27px", width: "25px", paddingTop: ".25em" }}
          />
        </button>
      </div>
    </CardWrapper>
  );
};

export default RecipeCard;

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
