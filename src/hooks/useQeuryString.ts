import { DEFAULT_CATEGORY, DEFAULT_PAGE_NO } from "../consts/search";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type ReturnValue = [
  {
    page: number;
    category: string;
  },
  {
    pushPage: (page: number) => void;
    pushCategory: (category: string) => void;
  }
];

type PushStateProps = {
  page: number;
  category: string;
};

export default (): ReturnValue => {
  const defaults = useMemo(() => getDefaultValues(), []);

  const [page, setPage] = useState<number>(defaults?.page ?? DEFAULT_PAGE_NO);
  const [category, setCategory] = useState<string>(
    defaults?.category ?? DEFAULT_CATEGORY
  );

  const pushCategory = (category: string) => {
    pushState({ category, page: DEFAULT_PAGE_NO });
    setCategory(category);
  };

  const pushPage = (page: number) => {
    pushState({ category, page });
    setPage(page);
  };

  // useEffect(() => {
  //   pushState({ category, page: DEFAULT_PAGE_NO });
  // }, [category]);

  // useEffect(() => {
  //   pushState({ category, page });
  // }, [page]);

  return [
    { category, page },
    {
      pushCategory,
      pushPage,
    },
  ];
};

const getDefaultValues = () => {
  if (typeof location !== "undefined") {
    const URLSearch = new URLSearchParams(location.search);

    const paramPage = Number(URLSearch.get("page"));
    const paramCategory = URLSearch.get("category");

    return {
      page: paramPage > 1 ? paramPage : DEFAULT_PAGE_NO,
      category: paramCategory !== "" ? paramCategory : DEFAULT_CATEGORY,
    };
  }
};

const pushState = ({ page, category }: PushStateProps) => {
  history.pushState({}, "", `?category=${category}&page=${page}`);
};
