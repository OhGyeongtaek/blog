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
  slug?: string;
};

function PostsAutoComplate({ posts }: Props) {
  const [showItems, setShowItems] = useState<Props["posts"]>(posts);
  const [keyword, setKeyword] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 100);
  };

  const handleChange = (value: string) => {
    setKeyword(value);
  };

  useEffect(() => {
    if (keyword === "") {
      setShowItems(PlasePushKeyword);
      return;
    }

    const searchItems = posts.filter(
      (post) => post.label.indexOf(keyword) > -1
    );

    setShowItems(searchItems.length > 0 ? searchItems : NotFindPost);
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

const PlasePushKeyword = [{ id: "", label: "검색어를 입력해 주세요." }];
const NotFindPost = [{ id: "", label: "검색된 게시글이 없습니다." }];

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
