import React from "react";
import { Container, ProjectGroup, SkillList } from "./styled";
import skills from "../../../contents/json/skills.json";
import ProjectListTitle from "./components/ProjectListTitle";
import ProjectListDescription from "./components/ProjectListDescription";
import ProjectListResult from "./components/ProjectListResult";
import ProjectListExperience from "./components/ProjectListExperience";
import ProjectListContents from "./components/ProjectListContents";
import ProjectListTenure from "./components/ProjectListTenure";
import ProjectListSkillSet from "./components/ProjectListSkillSet";

function CareerSkillsList() {
  return (
    <Container>
      <h1>경력 기술서</h1>
      {skills.map((skill) => (
        <>
          <ProjectGroup>
            <h2>{skill.name}</h2>
            {skill.tenure && <p>{skill.tenure}</p>}
          </ProjectGroup>
          {skill.projects.map((project) => (
            <SkillList>
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
            </SkillList>
          ))}
        </>
      ))}
    </Container>
  );
}

export default CareerSkillsList;
