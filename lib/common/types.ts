import { CSSProperties } from "react";

interface AtomBaseAttributes {
  className?: string;
  style?: CSSProperties;
}

interface AtomParentAttributes {
  children: {};
}

export { AtomBaseAttributes, AtomParentAttributes };
