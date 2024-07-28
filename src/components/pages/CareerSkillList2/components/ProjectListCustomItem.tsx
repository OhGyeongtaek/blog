import React from "react";

type Props = {
  results?: string[];
  title: string;
};
function ProjectListCustomItem({ results, title }: Props) {
  if (results) {
    return (
      <dl>
        <dt>{title}</dt>
        <dd>
          <ul>
            {results.map((result) => (
              <li>{result}</li>
            ))}
          </ul>
        </dd>
      </dl>
    );
  }

  return <></>;
}

export default ProjectListCustomItem;
