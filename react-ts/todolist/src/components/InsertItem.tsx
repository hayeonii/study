import { useState } from "react";
import { Item } from "../types/type";
interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const InsertItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  return (
    <>
      <input type="text" value={itemName} onChange={changeItemName} />
    </>
  );
};

export default InsertItem;
