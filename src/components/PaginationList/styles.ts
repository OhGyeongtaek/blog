import styled from "@emotion/styled";
import DefaultChip from "../Chip";
import { ChipBaseCss } from "../Chip/styles";
import DefaultChipGroup from "../ChipGroupOnlyOne";

const ChipGroupOnlyOne = styled(DefaultChipGroup)`
  margin-bottom: 20px;
`;

const Chip = styled(DefaultChip)`
  ${ChipBaseCss}
  margin: 2px;
`;

export { ChipGroupOnlyOne, Chip };
