import React from "react";
import { ValueLabel } from "../../types/Inputs";
import Chip from "../Chip";

type Props = {
  items: ValueLabel[];
  mutiple?: boolean;
  onSelect?: (items: ValueLabel[]) => void;
};

function ChipGroup({ items }: Props) {
  return (
    <div>
      {items.map((item) => (
        <Chip item={item} key={`chip-${item.value}`} />
      ))}
    </div>
  );
}

export default ChipGroup;
