import { TranslationKeys } from "@/types";
import React from "react";
import LocaleString from "./LocaleString";

interface Props {
  value: string[];
  title: TranslationKeys;
}

const ItemList = ({ value, title }: Props) => {
  const listItems = value.map((item, key) => {
    return (
      <li className="list-item" key={key}>
        {item}
      </li>
    );
  });

  return (
    <div className="list">
      <div className="list-title">
        <LocaleString string={title} />
      </div>
      <ul className="list-contents">{listItems}</ul>
    </div>
  );
};

export default ItemList;
