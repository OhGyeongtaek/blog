import React, { useState } from "react";
import { SearchBar, SearchContentCounter, SearchBarWrap } from "./style";

function SearchInput(props) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SearchBarWrap htmlFor="search-input" isFocus={isFocus}>
      <SearchBar
        type="text"
        id="search-input"
        placeholder="검색어를 입력해주세요."
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      <SearchContentCounter>20</SearchContentCounter>
    </SearchBarWrap>
  );
}

export default SearchInput;
