import React, { ReactElement, useLayoutEffect, useState } from "react";
import { DEFAULT_CATEGORY } from "../../../consts/search";
import { ChipItem } from "../Chip";

type Props = {
  items?: ChipItem[];
  className?: string;
  children: ReactElement[];
  onChange?: (selected: string) => void;
};

function ChipGroupOnlyOne({ items, children, onChange, ...rest }: Props) {
  const [selected, setSelected] = useState<string>(DEFAULT_CATEGORY);

  const handleSelect = (item: ChipItem) => {
    const { value } = item;

    setSelected(value);
    onChange?.(value);
  };

  const handleUnSelect = () => {
    setSelected(DEFAULT_CATEGORY);
    onChange?.(DEFAULT_CATEGORY);
  };

  useLayoutEffect(() => {
    children.forEach(({ props }) => {
      const { checked, value } = props.item;
      checked && setSelected(value);
    });
  }, []);

  return (
    <div {...rest}>
      {children.map((child) => {
        const newItem = { ...child };
        const { onSelect, onUnSelect } = newItem.props;

        newItem.props = {
          ...newItem.props,
          selected,
          onSelect: (item: ChipItem) => {
            handleSelect(item);
            onSelect?.(item);
          },
          onUnSelect: () => {
            handleUnSelect();
            onUnSelect?.();
          },
        };

        return newItem;
      })}
    </div>
  );
}

export { Props as ChipGroupProps };

export default ChipGroupOnlyOne;
