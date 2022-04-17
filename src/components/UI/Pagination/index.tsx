import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Colors } from "../../../consts/thema";

type Props = {
  // 총 데이터의 갯수
  count: number;

  // 몇개의 페이지 버튼을 출력할 것인지
  buttonLimit?: number;

  // 한 페이지에 몇개의 row를 보여줄지
  rowLimit?: number;

  // 현재 선택된 페이지
  current: number;

  onClickButton: (page: number) => void;
};

function Pagination({
  count,
  buttonLimit,
  current,
  rowLimit,
  onClickButton,
}: Props) {
  const handleClickButton = (page: number) => {
    onClickButton(page);
  };

  const paging = useMemo(() => {
    // 몇개의 페이지 버튼을 출력할 것인지
    const limitValue = buttonLimit ?? 10;

    // 한 페이지에 몇개의 row를 보여줄지
    const pageSizeValue = rowLimit ?? 10;

    // 총 페이지
    const totalPage = Math.ceil(count / pageSizeValue);

    // 페이지 그룹
    const pageGroup = Math.ceil(current / limitValue);

    // 해당 그룹의 마지막 페이지
    let lastPage = pageGroup * limitValue;

    // 마지막 페이지가 totalPage보다 크면 totalPage로 변경
    if (lastPage > totalPage) {
      lastPage = totalPage;
    }

    const firstPage = (pageGroup - 1) * limitValue;
    const nextPage = lastPage + 1;
    const prevPage = firstPage - 1;

    const showBlockCount =
      lastPage >= totalPage ? lastPage % limitValue : limitValue;

    const pageButtons = [];

    for (let i = 1; i <= showBlockCount; i++) {
      const now = firstPage + i;

      if (isNaN(now)) continue;

      pageButtons.push(
        <PageButton
          type="button"
          key={`page-button-${i}`}
          className={now === current ? "active" : ""}
          onClick={() => handleClickButton(now)}
        >
          {now}
        </PageButton>
      );
    }

    return {
      nextPage,
      prevPage,
      pageButtons,
    };
  }, [count, current]);

  return <Styler>{paging.pageButtons}</Styler>;
}

const Styler = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const PageButton = styled.button`
  border: 2px solid #ccc;
  cursor: pointer;
  margin: 0 8px;
  min-width: 30px;
  padding: 8px 12px;
  background: none;
  border-radius: 4px;
  color: #666;

  &.active {
    border: 2px solid ${Colors.primary};
    color: ${Colors.primary};
    font-weight: bold;
  }
`;

export default Pagination;
