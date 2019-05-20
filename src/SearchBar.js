import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input
        // value={recipeSearchTerm}
        // onChange={handleSearchInputChange}
        type="text"
        placeholder="Search..."
      />
      <button className="searchbtn" type="submit">
        Search
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  padding: 1em;
`;
