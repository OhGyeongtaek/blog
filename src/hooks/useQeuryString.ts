import { DEFAULT_CATEGORY, DEFAULT_PAGE_NO } from "../consts/search";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type ReturnValue = [
  {
    page: number;
    category: string;
  },
  {
    setPage: Dispatch<SetStateAction<number>>;
    setCategory: Dispatch<SetStateAction<string>>;
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

  useEffect(() => {
    pushState({ category, page: DEFAULT_PAGE_NO });
  }, [category]);

  useEffect(() => {
    pushState({ category, page });
  }, [page]);

  return [
    { category, page },
    {
      setCategory,
      setPage,
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
