export type RemarkNode = {
  id: string;
  frontmatter: FrontMatter;
};

export type FrontMatter = {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  date?: string;
};

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    totalCount: number;
    nodes: RemarkNode[];
  };
};
