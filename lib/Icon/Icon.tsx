import classNames from "classnames";
import React from "react";

import s from "./Icon.scss";

type IconCommonAttributes = {
  className?: string;
};

interface IconNameAttributes extends IconCommonAttributes {
  name: string;
  src?: undefined;
}

interface IconSrcAttributes extends IconCommonAttributes {
  name?: undefined;
  src: string;
}

const Icon = (props: IconNameAttributes | IconSrcAttributes) => {
  const className = classNames(s.icon, props.className);
  if (typeof props.name === "undefined") {
    return <img className={className} src={props.src} />;
  } else {
    return <span className={className}>{props.name}</span>;
  }
};

export { IconNameAttributes, IconSrcAttributes, IconCommonAttributes };
export { Icon };
