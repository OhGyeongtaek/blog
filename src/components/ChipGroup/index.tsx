import React, { useEffect, useState } from "react";
import Chip, { ChipItem } from "../Chip";

type Props = {
  items: ChipItem[];
  mutiple?: boolean;
  onChange?: (items: ChipItem[], changeItem: ChipItem) => void;
};

function ChipGroup({ items, onChange }: Props) {
  const [selectedItems, setSelectedItems] = useState<ChipItem[]>([]);

  const handleSelect = (item: ChipItem) => {
    const newItems = [...selectedItems, item];

    setSelectedItems(newItems);
    onChange?.(newItems, item);
  };

  const handleUnSelect = (item: ChipItem) => {
    const newItems = [...selectedItems];
    const idx = newItems.findIndex(({ value }) => value === item.value);

    newItems.splice(idx, 1);

    setSelectedItems(newItems);
    onChange?.(newItems, item);
  };

  useEffect(() => {
    setSelectedItems(items.filter((item) => item.checked));
  }, [items]);

  return (
    <div className="chip-group">
      {items.map((item) => (
        <Chip
          item={item}
          key={`chip-${item.value}`}
          onSelect={handleSelect}
          onUnSelect={handleUnSelect}
        />
      ))}
    </div>
  );
}

export { Props as ChipGroupProps };
export default React.memo(ChipGroup);
