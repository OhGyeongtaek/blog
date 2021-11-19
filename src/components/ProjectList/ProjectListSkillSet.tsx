import styled from "@emotion/styled";
import React from "react";

type Props = {
  skills: string[];
};

function ProjectListSkillSet({ skills }: Props) {
  return (
    <dl>
      <dt>사용기술</dt>
      <dd>
        <SkillSetList>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </SkillSetList>
      </dd>
    </dl>
  );
}

const SkillSetList = styled.ul`
  padding-top: 4px;
  display: flex;
  list-style: none !important;

  & > li {
    padding: 4px 16px;
    margin-right: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 0.8rem;
  }
`;

export default ProjectListSkillSet;
