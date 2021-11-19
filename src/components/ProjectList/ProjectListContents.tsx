import React from "react";

type Prop = {
  contents: string[];
};
function ProjectListContents({ contents }: Prop) {
  return (
    <dl>
      <dt>직무 내용</dt>
      <dd>
        <ul>
          {contents.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

export default ProjectListContents;
