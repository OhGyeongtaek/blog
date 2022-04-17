import React from "react";

type Prop = {
  title: string;
};

function ProjectListTitle({ title }: Prop) {
  return (
    <dl>
      <dt>프로젝트 명</dt>
      <dd>{title}</dd>
    </dl>
  );
}

export default ProjectListTitle;
