import { Card } from "@/types";
import React from "react";

import Item from "./Item";
import ItemList from "./ItemList";

interface Props {
  data: Card;
}

const Card = ({ data: { descriptions, ...rest } }: Props) => {
  return (
    <div className="card">
      <div className="card-contents">
        {Object.keys(rest).map((key) => {
          const typedKey = key as keyof typeof rest;
          const value = rest[typedKey];
          return value && <Item key={key} value={value} title={typedKey} />;
        })}
        {descriptions && <ItemList value={descriptions} title="descriptions" />}
      </div>
    </div>
  );
};

export default Card;
