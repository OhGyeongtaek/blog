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

export type PostCategoryStatistics = {
  totalCount: number;
  fieldValue: string;
};

export type AllMarkdownRemark = {
  totalCount: number;
  nodes: RemarkNode[];
  group: PostCategoryStatistics[];
};
