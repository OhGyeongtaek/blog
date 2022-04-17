import React, { createRef, useLayoutEffect } from "react";

const attributes = {
  src: "https://utteranc.es/client.js",
  repo: "OhGyeongtaek/blog",
  "issue-term": "pathname",
  label: "comment",
  theme: "github-light",
  crossOrigin: "anonymous",
  async: "true",
};

const Comment = () => {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement("script");

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, []);

  return <div ref={containerRef} />;
};

export default Comment;
