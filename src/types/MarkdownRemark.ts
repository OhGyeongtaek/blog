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
  totalCount: number;

  allMarkdownRemark: {
    totalCount: number;
    nodes: RemarkNode[];
  };

  group: {
    totalCount: number;
    fieldValue: string;
  };
};
