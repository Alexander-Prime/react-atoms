import classNames from "classnames";
import React from "react";

import "./Card.scss";

interface CardAttributes extends JSX.ElementChildrenAttribute {
  className?: string;
}

const Card = (props: CardAttributes) => {
  const className = classNames("reactAtoms-card", props.className);
  return <div className={className}>{props.children}</div>;
};

export { CardAttributes };
export { Card };
