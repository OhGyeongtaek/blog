import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import SearchInput from "../SearchInput";

type Props = {
  posts: PostItems[];
};

type PostItems = {
  id: string;
  label: string;
  slug: string;
};

function PostsAutoComplate({ posts }: Props) {
  const [showItems, setShowItems] = useState<Props["posts"]>(posts);
  const [keyword, setKeyword] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (value: string) => {
    setKeyword(value);
  };

  useEffect(() => {
    setShowItems(posts.filter((post) => post.label.indexOf(keyword) > -1));
  }, [keyword]);

  return (
    <Styler>
      <SearchInput
        count={showItems.length}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isFocus && <Menu items={showItems} />}
    </Styler>
  );
}

const Styler = styled.div`
  position: relative;
  padding: 40px 0;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;

  & > ul {
    position: absolute;
    max-height: 300px;
    overflow: auto;
  }
`;

export { PostItems };
export default PostsAutoComplate;
