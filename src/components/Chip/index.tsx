import styled from "@emotion/styled";
import React, { useImperativeHandle, useState } from "react";

type Props = {
  item: {
    value: string | number;
    label: string;
    checked?: boolean;
    disabled?: boolean;
  };
  onSelect?: (item: Props["item"], isSelected: boolean) => void;
};

type CustomFunction = {
  value: string | number;
  updateChecked: (chk: boolean) => void;
};

const Chip: React.ForwardRefRenderFunction<CustomFunction, Props> = (
  { item, onSelect }: Props,
  ref
) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.checked);

  const handleClick = () => {
    onSelect?.(item, !isChecked);
    setIsChecked(!isChecked);
  };

  useImperativeHandle(ref, () => ({
    value: item.value,
    updateChecked: (chk: boolean) => {
      setIsChecked(chk);
    },
  }));

  return (
    <ChipStyler
      type="button"
      disabled={item.disabled}
      aria-checked={isChecked}
      onClick={handleClick}
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

export { Props as ChipProps, CustomFunction as ChipCustomFunction };
export default React.forwardRef(Chip);
