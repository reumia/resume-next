import { Card as CardType, TranslationKeys } from "@/types";
import React from "react";
import Card from "./Card";

import LocaleString from "./LocaleString";

interface Props {
  title: TranslationKeys;
  data: CardType[];
}

const Cards = ({ title, data }: Props) => {
  const cards = data.map((item, key) => <Card data={item} key={key} />);

  return (
    <div className="cards-wrap">
      <div className="cards-title">
        <LocaleString string={title} />
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Cards;
