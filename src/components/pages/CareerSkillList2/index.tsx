import React from "react";
import { Container, ProjectGroup, SkillList } from "./styled";
import skills from "../../../contents/json/skills2.json";
import ProjectListCustomItem from "./components/ProjectListCustomItem";
import ProjectListTasksAndTech from "./components/ProjectListTasksAndTech"
import ProjectListSkills from "./components/ProjectListSkills"

function CareerSkillsList() {
  return (
    <Container>
      <h1>경력 기술서</h1>
      {skills.experience.map((skill) => (
        <>
          <ProjectGroup>
            <h2>{skill.companyName}</h2>
            {skill.period && <p>{skill.period}</p>}
          </ProjectGroup>
          {skill.projects.map((project) => (
            <SkillList>
              <ProjectListCustomItem title={'프로젝트 명'} results={[project.projectName]} />
              <ProjectListCustomItem title={'프로젝트 기간'} results={[project.projectPeriod]} />
              <ProjectListCustomItem title={'프로젝트 목표'} results={[project.goal]} />
              <ProjectListCustomItem title={'역할 및 책임'} results={project.rolesAndResponsibilities} />
              <ProjectListCustomItem title={'성과'} results={project.achievements} />
              <ProjectListTasksAndTech items={project.tasksAndTechnologies}/>
              <ProjectListCustomItem title={'팀 규모'} results={[project.teamSize]} />
              <ProjectListSkills stack={project.technologyStack}/>
            </SkillList>
          ))}
        </>
      ))}
    </Container>
  );
}

export default CareerSkillsList;
