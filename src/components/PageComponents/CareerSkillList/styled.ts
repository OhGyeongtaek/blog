import styled from "@emotion/styled";
import { Colors } from "../../../consts/thema";

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;

  & h1 {
    font-size: 2rem;
    padding-top: 20px;
    font-weight: bold;
  }
`;

export const ProjectGroup = styled.div`
  padding-top: 20px;
  padding-left: 8px;
  & h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Colors.primary};
    padding-bottom: 8px;
  }

  & p {
    font-size: 0.85rem;
    padding-bottom: 8px;
  }
`;

export const SkillList = styled.div`
  border-top: 1px solid #ccc;
  font-size: 0.85rem;
  line-height: 150%;
  padding: 20px;

  & > dl {
    padding-bottom: 8px;
  }

  & dl > dt {
    font-weight: bold;
  }

  & dl > dd {
    padding-left: 20px;
  }

  & dd > ul {
    list-style: inside;
  }
`;
