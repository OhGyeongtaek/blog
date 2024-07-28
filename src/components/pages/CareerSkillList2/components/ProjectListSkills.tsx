import React from "react";

type Prop = {
  stack: {
    frontend: string[],
    backend: string[],
    toolsAndLibraries: string[]
  }
};

function ProjectListSkills({ stack }: Prop) {
  return (
    <dl>
      <dt>사용 기술 스택</dt>
      <dd>
        <ul>
          { stack.frontend && <li><strong>프론트엔드: </strong>{ stack.frontend.join(', ') }</li>}
          { stack.backend && <li><strong>백엔드: </strong>{ stack.backend.join(', ') }</li>}
          { stack.toolsAndLibraries && <li><strong>도구 및 라이브러리: </strong>{ stack.toolsAndLibraries.join(', ') }</li>}
        </ul>
      </dd>
    </dl>
  );
}

export default ProjectListSkills;
