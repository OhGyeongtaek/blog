import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CATEGORY_TYPE_ALL, CATEGORY_TYPE_NOMAL } from "../../consts/search";
import { Colors } from "../../consts/thema";

type Props = {
  item: ChipItem;
  selected?: string;
  onSelect?: (item: Props["item"]) => void;
  onUnSelect?: (item: Props["item"]) => void;
};

type CustomFunction = {
  value: string | number;
  updateChecked: (chk: boolean) => void;
};

type ChipItem = {
  value: string | number;
  label: string;
  type?: typeof CATEGORY_TYPE_NOMAL | typeof CATEGORY_TYPE_ALL;
  checked?: boolean;
};

const Chip = ({ item, selected, onSelect, onUnSelect }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(selected === item.value);

  const handleSelect = () => {
    onSelect?.(item);
    setIsChecked(!isChecked);
  };

  const handleUnSelect = () => {
    onUnSelect?.(item);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(selected === item.value);
  }, [selected]);

  if (!item.label) {
    return <></>;
  }

  return (
    <ChipStyler
      type="button"
      className="chip"
      aria-checked={isChecked}
      alt={item.value}
      onClick={() => {
        isChecked ? handleUnSelect() : handleSelect();
      }}
    >
      {item.label}
    </ChipStyler>
  );
};

const ChipStyler = styled.button<{ alt: CustomFunction["value"] }>`
  font-size: 0.8rem;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ccc;
  background: #fff;
  cursor: pointer;
  color: ${Colors.black};

  &[aria-checked="true"] {
    border: 2px solid ${Colors.primary};
    box-sizing: border-box;
  }
`;

export { ChipItem, CustomFunction as ChipCustomFunction };
export default Chip;
