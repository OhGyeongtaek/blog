import React from "react";

type Prop = {
  items: {
    task: string;
    description: string;
    technologies: string[];
  }[]
};

function ProjectListTasksAndTech({ items }: Prop) {
  return (
    <dl>
      <dt>구체적인 업무 내용 및 사용 기술</dt>
      <dd>
        <ul>
            {items.map((item) => (
                <li>
                    <strong>{item.task}: </strong>
                    {item.description} <br/>
                    {/* 사용기술: {item.technologies.join(', ')} */}
                </li>
            ))}
        </ul>
      </dd>
    </dl>
  );
}

export default ProjectListTasksAndTech;
