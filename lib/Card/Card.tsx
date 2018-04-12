import classNames from "classnames";
import React from "react";

import { AtomBaseAttributes, AtomParentAttributes } from "common/types";

import s from "./Card.scss";

interface CardAttributes extends AtomBaseAttributes, AtomParentAttributes {}

const Card = (props: CardAttributes) => {
  const className = classNames(s.card, props.className);
  return (
    <div className={className} style={props.style}>
      {props.children}
    </div>
  );
};

export { CardAttributes };
export { Card };
