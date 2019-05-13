import React from "react";
import styled from "styled-components";
import sauceIcon from "./chef.png";

const NavBar = ({ links, ...props }) => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <Icon size="small" alt="sauce" src={sauceIcon} />
        </HeaderItem>

        <HeaderItem>Recipes</HeaderItem>

        <HeaderItem>User@RecipeBoss.com</HeaderItem>
      </HeaderMenu>
    </Header>
  );
};
export default NavBar;

NavBar.displayName = "NavBar";

const Header = styled.header`
  // background-color: #f9ea8f;
  // background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%);
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  position: fixed;
  top: 0;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  left: 0;
  right: 0;
  height: 50px;
`;
const HeaderMenu = styled.ul`
  margin-top: 10px;
  align-items: center;
  display: flex;
  color: white;
  > li:last-child {
    margin-left: auto;
  }
`;
const HeaderItem = styled.li`
  padding: 0 10px 0 10px;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;
`;
const Icon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: cover;
  border-radius: 50%;
`;