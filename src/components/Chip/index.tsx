import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import { ValueLabel } from "../../types/Inputs";

type Props = {
  item: ValueLabel;
  checked?: boolean;
  onSelect?: (item: Props["item"], isSelected: boolean) => void;
};

function Chip({ item, checked, onSelect }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleClick = () => {
    onSelect?.(item, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <ChipStyler type="button" aria-checked={isChecked} onClick={handleClick}>
      {item.label}
    </ChipStyler>
  );
}

const ChipStyler = styled.button`
  font-size: 0.8rem;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;

  &[aria-checked="true"] {
    border: 1px solid red;
    color: red;
  }
`;

export default Chip;
