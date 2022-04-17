import React from "react";

type Prop = {
  description?: string;
};

function ProjectListDescription({ description }: Prop) {
  if (description) {
    return (
      <dl>
        <dt>프로젝트 설명</dt>
        <dd>{description}</dd>
      </dl>
    );
  }
  return <></>;
}

export default ProjectListDescription;
