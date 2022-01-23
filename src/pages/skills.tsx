import styled from "@emotion/styled";
import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import ProjectListContents from "../components/ProjectList/ProjectListContents";
import ProjectListDescription from "../components/ProjectList/ProjectListDescription";
import ProjectListExperience from "../components/ProjectList/ProjectListExperience";
import ProjectListResult from "../components/ProjectList/ProjectListResult";
import ProjectListSkillSet from "../components/ProjectList/ProjectListSkillSet";
import ProjectListTenure from "../components/ProjectList/ProjectListTenure";
import ProjectListTitle from "../components/ProjectList/ProjectListTitle";
import { Colors } from "../consts/thema";
import skills from "../contents/json/skills.json";

function Skills() {
  return (
    <MainLayout>
      <Wrapper>
        <h1>경력 기술서</h1>
        {skills.map((skill) => (
          <>
            <ProjectGroup>
              <h2>{skill.name}</h2>
              {skill.tenure && <p>{skill.tenure}</p>}
            </ProjectGroup>
            {skill.projects.map((project) => (
              <SkillList>
                <div>
                  <ProjectListTitle title={project.title} />
                  <ProjectListDescription description={project.description} />
                  <ProjectListResult results={project.results} />
                  <ProjectListExperience experiences={project.experiences} />
                  <ProjectListContents contents={project.contents} />
                  <dl>
                    <dt>인원 규모</dt>
                    <dd>{project.size}</dd>
                  </dl>
                  <ProjectListTenure
                    startDate={project.startDate}
                    endDate={project.endDate}
                  />
                  <ProjectListSkillSet skills={project.skills} />
                </div>
              </SkillList>
            ))}
          </>
        ))}
      </Wrapper>
    </MainLayout>
  );
}

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;

  & h1 {
    font-size: 2rem;
    padding-top: 20px;
    font-weight: bold;
  }
`;

const ProjectGroup = styled.div`
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

const SkillList = styled.ul`
  list-style: none;
  border-top: 1px solid #ccc;
  font-size: 0.85rem;
  line-height: 150%;

  & > div {
    padding: 20px;
  }

  & > div > dl {
    padding-bottom: 8px;
  }

  & > div > dl > dt {
    font-weight: bold;
  }

  & > div > dl > dd {
    padding-left: 20px;
  }

  & > div > dl > dd > ul {
    list-style: inside;
  }
`;
export default Skills;
