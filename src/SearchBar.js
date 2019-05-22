import React, { useState } from "react";
import styled from "styled-components";


// input element and the search button, contains functions that handle the input element and resets the field, and also contains a function that calls the search function which is passed as props to it

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);

  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
      console.log(searchValue)
  }

  return (
    <SearchBarContainer>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search..."
        name="search"
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
