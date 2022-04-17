import styled from "@emotion/styled";
import React, { useState } from "react";
import { Colors } from "../../consts/thema";

type Props = {
  count?: number;
  placeholder?: string;
  onChange?: (keyword: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

function SearchInput({ count, placeholder, onFocus, onBlur, onChange }: Props) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocus(false);
    onBlur?.();
  };

  const handleChange = (e) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <SearchBarWrap htmlFor="search-input" isFocus={isFocus}>
      <SearchBar
        type="text"
        id="search-input"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <SearchContentCounter>{count}</SearchContentCounter>
    </SearchBarWrap>
  );
}

SearchInput.defaultProps = {
  placeholder: "검색어를 입력해 주세요.",
};

const SearchBarWrap = styled.label<{ isFocus: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid ${Colors.primary};
  border-radius: 4px;

  ${({ isFocus }) => {
    if (isFocus) {
      return "box-shadow: 0px 0px 8px 0px #666";
    }
  }};
`;

const SearchBar = styled.input`
  width: 100%;
  border: none;
  font-size: 0.85rem;
  padding: 8px;
  background: none;

  &: focus {
    outline: none;
  }
`;

const SearchContentCounter = styled.strong`
  color: ${Colors.primary};
  font-size: 0.8rem;
  margin: 0 8px;
`;

export default SearchInput;
