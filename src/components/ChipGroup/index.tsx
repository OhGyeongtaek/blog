import React, { useEffect, useRef } from "react";
import Chip, { ChipCustomFunction, ChipProps } from "../Chip";

type Props = {
  items: ChipProps["item"][];
  mutiple?: boolean;
  onSelect?: (items: Props["items"]) => void;
};

function ChipGroup({ items }: Props) {
  const refs = useRef<ChipCustomFunction[]>([]);

  const handleOnSelect = (item: ChipProps["item"], isSelected: boolean) => {};

  const createChipRef = (ref: ChipCustomFunction) => {
    refs.current.push(ref);
  };

  return (
    <div>
      {items.map((item) => (
        <Chip
          item={item}
          key={`chip-${item.value}`}
          ref={createChipRef}
          onSelect={handleOnSelect}
        />
      ))}
    </div>
  );
}

export { Props as ChipGroupProps };
export default ChipGroup;
