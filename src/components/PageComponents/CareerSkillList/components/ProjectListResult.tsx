import React from "react";

type Props = {
  results?: string[];
};
function ProjectListResult({ results }: Props) {
  if (results) {
    return (
      <dl>
        <dt>성과</dt>
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

export default ProjectListResult;
