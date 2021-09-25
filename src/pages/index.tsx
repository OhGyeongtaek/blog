import * as React from "react";
import styled from "@emotion/styled";

import Header from "../components/Header";
import List from "../components/List";
import Layout from "../components/Layouts";
import SearchInput from "../components/SearchInput";
import { ListItemProps } from "../components/ListItem";
import { Colors } from "../consts/thema";

const items: ListItemProps["item"][] = [
  {
    id: 1,
    title: "추천 서비스가 컨테이너를 만났을 때",
    description:
      "추천 서비스가 컨테이너를 만났을 때 어떻게 처리했는지에 대해 소개하는 게시글입니다.",
    createdDate: "2021.01.03",
  },
  {
    id: 2,
    title: "일도 중요하지만 놀 때는 놀아봐요.",
    description: "일도 중요하지만 놀 때는 놀아봐요.",
    createdDate: "2021.02.13",
  },
  {
    id: 3,
    title: "웹브라우저에서 동작하는 녹화앱 만들기",
    description: "웹브라우저에서 동작하는 녹화앱 만들기를 소개합니다.",
    createdDate: "2021.03.19",
  },
  {
    id: 4,
    title: "브라우저에서 미디어 권한을 다루는 간단한 Tip!",
    description: "브라우저에서 미디어 권한을 다루는 간단한 Tip!",
    createdDate: "2021.03.21",
  },
  {
    id: 5,
    title: "리엑트18 버전에 추가되는 기능",
    description: "리엑트18 버전에 추가되는 기능을 소개합니다.",
    createdDate: "2021.04.12",
  },
  {
    id: 6,
    title: "협업의 조건",
    description: "협업의 조건이란?",
    createdDate: "2021.04.28",
  },
  {
    id: 7,
    title: "DevOps팀의 Terraform 모험",
    description: "사실은 낭만이 아닌 헬이었다.",
    createdDate: "2021.05.09",
  },
  {
    id: 8,
    title: "카트 개발 연대기",
    description: "컬리 카트는 어떤 모습으로 성장하고 있을까?",
    createdDate: "2021.05.21",
  },
  {
    id: 9,
    title: "DDD와 MSA기반으로 좋은 서비스 개발하기",
    description: "컬리의 서비스 개발 원칙",
    createdDate: "2021.06.11",
  },
  {
    id: 10,
    title: "왜 폴 그레이엄은 회사이름을 Y Combinator라고 지었을까?",
    description: "왜 폴 그레이엄은 회사이름을 Y Combinator라고 지었을까?",
    createdDate: "2021.06.29",
  },
  {
    id: 11,
    title: "React 이해하기",
    description: "React의 기본 개념에 대해 알아봅시다.",
    createdDate: "2021.07.11",
  },
  {
    id: 12,
    title: "Lambda Calculus에 대해 알아보자",
    description: "Lambda Calculus에 대해 알아보자",
    createdDate: "2021.09.22",
  },
];

const Contents = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const More = styled.article`
  font-size: 3rem;
  text-align: center;
  margin-top: -20px;
  color: ${Colors.primary};

  & strong {
    cursor: pointer;
  }
`;
// markup
const IndexPage = () => {
  return (
    <div>
      <Layout />
      <Header></Header>
      <Contents>
        <SearchInput />
        <List items={items} />
        <More>
          <strong>...</strong>
        </More>
      </Contents>
    </div>
  );
};

export default IndexPage;
