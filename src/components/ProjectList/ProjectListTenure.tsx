import React from "react";

type Props = {
  startDate: string;
  endDate?: string;
};
function ProjectListTenure({ startDate, endDate }: Props) {
  return (
    <dl>
      <dt>프로젝트 기간</dt>
      <dd>
        {startDate} ~ {endDate ?? "진행중"}
      </dd>
    </dl>
  );
}

export default ProjectListTenure;
