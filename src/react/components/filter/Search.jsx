import React, { useState } from "react";

import SearchIcon from "../icons/SearcIcon.jsx";

const Search = ({ submitText }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="form__search search">
      <button
        type="button"
        className="btn-search"
        onClick={() => {
          submitText((currState) => ({ ...currState, keyWord: inputText }));
          setInputText("");
        }}
      >
        <SearchIcon />
      </button>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="search__field"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
    </div>
  );
};

export default Search;
