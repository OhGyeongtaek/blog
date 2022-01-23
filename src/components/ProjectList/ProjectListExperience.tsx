import React from "react";

type Props = {
  experiences?: string[];
};

function ProjectListExperience({ experiences }: Props) {
  if (!experiences) {
    return <></>;
  }
  return (
    <dl>
      <dt>본인 경험</dt>
      <dd>
        <ul>
          {experiences.map((experience) => (
            <li>{experience}</li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

export default ProjectListExperience;
