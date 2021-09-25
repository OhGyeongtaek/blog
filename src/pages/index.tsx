import * as React from "react";
import styled from "@emotion/styled";

import Header from "../components/Header";
import List from "../components/List";
import Layout from "../components/Layouts";
import SearchInput from "../components/SearchInput";

const items = [
  {
    id: 1,
    title: "타이틀1",
  },
  {
    id: 2,
    title: "타이틀2",
  },
];

const Contents = styled.main`
  width: 800px;
  margin: 0 auto;
`;

// markup
const IndexPage = () => {
  return (
    <div>
      <Layout />
      <Header></Header>
      <Contents>
        <SearchInput />
        <article>
          <List items={items} />
        </article>
      </Contents>
    </div>
  );
};

export default IndexPage;
