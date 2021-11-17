import React, { useEffect, useRef, useState } from "react";
import Chip, { ChipCustomFunction, ChipItem } from "../Chip";

type Props = {
  items: ChipItem[];
  mutiple?: boolean;
  onChange?: (items: Props["items"]) => void;
};

function ChipGroup({ items, onChange }: Props) {
  const refs = useRef<ChipCustomFunction[]>([]);
  const [selectedItems, setSelectedItems] = useState<ChipItem[]>([]);

  const handleSelect = (item: ChipItem) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleUnSelect = (item: ChipItem) => {
    const newItems = [...selectedItems];
    const idx = newItems.findIndex(({ value }) => value === item.value);
    newItems.splice(idx, 1);
    setSelectedItems(newItems);
    onChange?.(newItems);
  };

  const createChipRef = (ref: ChipCustomFunction) => {
    refs.current.push(ref);
  };

  return (
    <div className="chip-group">
      {items.map((item) => (
        <Chip
          item={item}
          key={`chip-${item.value}`}
          // ref={createChipRef}
          onSelect={handleSelect}
          onUnSelect={handleUnSelect}
        />
      ))}
    </div>
  );
}

export { Props as ChipGroupProps };
export default ChipGroup;
