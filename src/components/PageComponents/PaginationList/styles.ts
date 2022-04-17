import styled from "@emotion/styled";
import DefaultChip from "../../UI/Chip";
import { ChipBaseCss } from "../../UI/Chip/styles";
import DefaultChipGroup from "../../UI/ChipGroupOnlyOne";

const ChipGroupOnlyOne = styled(DefaultChipGroup)`
  margin-bottom: 20px;
`;

const Chip = styled(DefaultChip)`
  ${ChipBaseCss}
  margin: 2px;
`;

const Container = styled.main`
  max-width: 740px;
  min-height: 600px;
  padding-top: 40px;
  margin: 0 auto;
`;

export { ChipGroupOnlyOne, Chip, Container };
