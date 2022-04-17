import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CATEGORY_TYPE_ALL, CATEGORY_TYPE_NOMAL } from "../../../consts/search";
import { Colors } from "../../../consts/thema";

type Props = {
  item: ChipItem;
  selected?: string;
  className?: string;
  onSelect?: (item: Props["item"]) => void;
  onUnSelect?: (item: Props["item"]) => void;
};

type CustomFunction = {
  value: string | number;
  updateChecked: (chk: boolean) => void;
};

type ChipItem = {
  value: string;
  label: string;
  type?: typeof CATEGORY_TYPE_NOMAL | typeof CATEGORY_TYPE_ALL;
  checked?: boolean;
};

const Chip = ({ item, selected, onSelect, onUnSelect, ...rest }: Props) => {
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
    <button
      type="button"
      className="chip"
      aria-checked={isChecked}
      role="radio"
      onClick={() => {
        isChecked ? handleUnSelect() : handleSelect();
      }}
      {...rest}
    >
      {item.label}
    </button>
  );
};

export { ChipItem, CustomFunction as ChipCustomFunction };
export default Chip;
