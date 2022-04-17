import { ChipItem } from "../components/UI/Chip";
import { POST_LIMIT } from "../consts/pagination";
import { CATEGORY_TYPE_ALL, DEFAULT_CATEGORY } from "../consts/search";
import { RemarkNode, PostCategoryStatistics } from "../types/MarkdownRemark";

const getFilteringItems = (
  nodes: RemarkNode[],
  page: number,
  category: string
): [RemarkNode[], number] => {
  const items = nodes.filter((node) => {
    if (category === CATEGORY_TYPE_ALL) {
      return true;
    }

    return category === node.frontmatter.category;
  });

  const total = items.length;
  const startIndex = (page - 1) * POST_LIMIT;
  const sliceItems = items.slice(startIndex, startIndex + POST_LIMIT - 1);

  return [sliceItems, total];
};

const getCategories = (group: PostCategoryStatistics[], selected: string) =>
  group.map(({ fieldValue, totalCount }) => ({
    value: fieldValue,
    label: `${fieldValue} : ${totalCount}`,
    checked: selected === fieldValue,
  }));

const getCategoriesAddAll = (
  group: PostCategoryStatistics[],
  selected: string
): ChipItem[] => [
  {
    value: DEFAULT_CATEGORY,
    label: DEFAULT_CATEGORY,
    type: CATEGORY_TYPE_ALL,
    checked: selected === DEFAULT_CATEGORY,
  },
  ...getCategories(group, selected),
];

export { getFilteringItems, getCategories, getCategoriesAddAll };
