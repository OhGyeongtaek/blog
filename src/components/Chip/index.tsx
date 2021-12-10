import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CATEGORY_TYPE_ALL, CATEGORY_TYPE_NOMAL } from "../../consts/search";

type Props = {
  item: ChipItem;
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
  disabled?: boolean;
};

const Chip: React.ForwardRefRenderFunction<CustomFunction, Props> = (
  { item, onSelect, onUnSelect }: Props,
  ref
) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.checked);

  const handleSelect = () => {
    onSelect?.(item);
    setIsChecked(!isChecked);
  };

  const handleUnSelect = () => {
    onUnSelect?.(item);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(item.checked);
  }, [item.checked]);

  if (!item.label) {
    return <></>;
  }

  return (
    <ChipStyler
      type="button"
      className="chip"
      disabled={item.disabled}
      aria-checked={isChecked}
      onClick={() => {
        isChecked ? handleUnSelect() : handleSelect();
      }}
    >
      {item.label}
    </ChipStyler>
  );
};

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

export { ChipItem, CustomFunction as ChipCustomFunction };
export default Chip;
