import { TranslationKeys } from "@/types";
import React from "react";
import LocaleString from "./LocaleString";

interface Props {
  value: string | string[];
  title: TranslationKeys;
}

const Item = ({ value, title }: Props) => {
  let texts;

  if (Array.isArray(value)) {
    texts = value.map((item, index) => (
      <span className="text" key={index}>
        {item}
      </span>
    ));
  } else {
    if (title === "name") texts = <span className="text-bold">{value}</span>;
    else if (title === "url")
      texts = (
        <a className="text-link" href={value}>
          {value}
        </a>
      );
    else texts = value;
  }

  return (
    <div className="item">
      <div className="item-title">
        <LocaleString string={title} />
      </div>
      <div className="item-contents">{texts}</div>
    </div>
  );
};

export default Item;
