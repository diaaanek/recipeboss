import React from "react";
import styled from "styled-components";
import Flippy, { FrontSide, BackSide } from "react-flippy";

// DESTRUCTURING // COLLECT OPERATOR // **
const RecipeCard = ({ editRecipe, deleteRecipe, ...recipe }) => {
  return (
    <div>
      <CardWrapper>
        <Flippy style={{ padding: "0em" }}>
          <FrontSide>
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
          </FrontSide>

          <BackSide style={{ padding: "10px" }}>
            <img
              src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1557869745/50-Restaurant-Icons-02.png"
              alt="food-logo"
              style={{ height: "50px", width: "50px" }}
            />
            <h4>Instructions:</h4>

            <p
              style={{
                margin: "0.5rem",
                fontSize: "12px",
                fontFamily: "Avenir"
              }}
            >
              {recipe.instructions}
            </p>
          </BackSide>
        </Flippy>
      </CardWrapper>

      <div className="button-container" style={{ padding: "1" }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_classic_red_heart_team_tattly_00_1024x1024@2x.png?v=1531940498"
          alt="heart-button"
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "white",
            padding: "5px",
            marginRight: "0.25rem",
            borderRadius: "50%"
          }}
        />
          <button
            onClick={() => {
              editRecipe(recipe)
              alert(recipe.name)
            }}
            id="editbtn"
            style={{
              backgroundColor: "Transparent",
              border: "none",
              paddingRight: "5px"
            }}
            className="edit-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-pencil_2.svg/512px-Circle-icons-pencil_2.svg.png"
              alt="edit-button"
              style={{
                height: "52px",
                width: "50px",
                paddingTop: ".25em"
              }}
            />
          </button>

          <button
            style={{ backgroundColor: "Transparent", border: "none" }}
            className="delete btn"
            onClick={() => deleteRecipe(recipe.id)}
          >
          <img
            src="https://image.flaticon.com/icons/png/128/148/148766.png"
            alt="delete-button"
            style={{
              height: "52px",
              width: "50px",
              paddingTop: ".25em"
            }}
          />
        </button>
      </div>
    </div>
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
  :hover {
    transition: all 0.2s;
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    margin-top: -2px;
  }
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
