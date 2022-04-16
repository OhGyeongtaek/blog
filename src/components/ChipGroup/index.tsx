import React, { useEffect, useState } from "react";
import { DEFAULT_CATEGORY } from "../../consts/search";
import Chip, { ChipItem } from "../Chip";

type Props = {
  items: ChipItem[];
  onChange?: (selected: string) => void;
};

function ChipGroup({ items, onChange }: Props) {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (item: ChipItem) => {
    const value = String(item.value);

    setSelected(value);
    onChange?.(value);
  };

  const handleUnSelect = () => {
    setSelected(DEFAULT_CATEGORY);
    onChange?.(DEFAULT_CATEGORY);
  };

  useEffect(() => {
    items.forEach((item) => {
      if (item.checked) {
        setSelected(String(item.value));
      }
    });
  }, []);

  return (
    <div className="chip-group">
      {items.map((item) => (
        <Chip
          item={item}
          selected={selected}
          key={`chip-${item.value}`}
          onSelect={handleSelect}
          onUnSelect={handleUnSelect}
        />
      ))}
    </div>
  );
}

export { Props as ChipGroupProps };

export default ChipGroup;
