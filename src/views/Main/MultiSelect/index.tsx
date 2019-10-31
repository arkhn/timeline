import { Icon, Intent, ITagProps, MenuItem } from "@blueprintjs/core";
import {
  ItemRenderer,
  MultiSelect as BPMultiSelect
} from "@blueprintjs/select";
import React, { useState } from "react";

import "./style.less";

interface IItem {
  type: string;
}

const mockItems = [
  { type: "Diagnostics" },
  { type: "Observations" },
  { type: "Prescriptions" },
  { type: "Compte-rendu" }
];

const MultiSelect = () => {
  const CustomMultiSelect = BPMultiSelect.ofType<IItem>();
  const [items, setItems] = useState(mockItems);
  const [selectedItems, setSelectedItems] = useState([]);

  const renderTag = (item: IItem) => item.type;

  const renderItem: ItemRenderer<IItem> = (
    item,
    { modifiers, handleClick }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }

    return (
      <MenuItem
        key={item.type}
        icon={isItemSelected(item) ? "tick" : "blank"}
        onClick={handleClick}
        text={item.type}
        shouldDismissPopover={false}
      />
    );
  };

  const isItemSelected = (item: IItem) => {
    return selectedItems.indexOf(item) !== -1;
  };

  const deselectItem = (index: number) => {
    setSelectedItems(
      selectedItems.filter((item: IItem, i: number) => i !== index)
    );
  };

  const handleItemSelect = (item: IItem) => {
    const index = selectedItems.indexOf(item);

    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      deselectItem(index);
    }
  };

  const handleTagRemove = (_tag: string, index: number) => {
    deselectItem(index);
  };

  const getTagProps = (_value: string, index: number): ITagProps => ({
    intent: Intent.SUCCESS
    // minimal: true,
  });

  return (
    <CustomMultiSelect
      className="multi-select"
      fill
      itemRenderer={renderItem}
      items={items}
      onItemSelect={handleItemSelect}
      placeholder="Types de documents"
      popoverProps={{ minimal: true }}
      selectedItems={selectedItems}
      tagRenderer={renderTag}
      tagInputProps={{
        large: true,
        tagProps: getTagProps,
        onRemove: handleTagRemove,
        rightElement: <Icon icon="chevron-down" color="#999999" />
      }}
    />
  );
};

export default MultiSelect;
