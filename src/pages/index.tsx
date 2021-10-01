import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import { PATH_LIST } from "../consts/path";

function index() {
  useEffect(() => {
    navigate(PATH_LIST);
  }, []);
  return <></>;
}

export default index;
