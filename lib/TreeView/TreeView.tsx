import classnames from "classnames";
import React from "react";

import { AtomBaseAttributes } from "common/types";

import c from "./TreeView.scss";

interface TreeViewAttributes<I> extends AtomBaseAttributes {
  render: (item: I) => JSX.Element | null;
  getChildren: (item?: I) => Iterable<I>;
  getKey: (item: I) => string;
}

const TreeView = <I extends any>(props: TreeViewAttributes<I>) => {
  const { getChildren, getKey } = props;
  const className = classnames(c.treeView, props.className);
  return (
    <ul className={className} style={props.style}>
      {Array(...getChildren()).map(child => (
        <Item item={child} {...props} key={getKey(child)} />
      ))}
    </ul>
  );
};

type ItemProps<I> = TreeViewAttributes<I> & { item: I };

class Item<I> extends React.PureComponent<ItemProps<I>> {
  render(): JSX.Element {
    const { item, render, getChildren, getKey } = this.props;
    const children = Array(...getChildren(item));
    const childrenElem = children.length > 0 && (
      <ul className={c["treeView-item-children"]}>
        {children.map(child => (
          <Item {...this.props} item={child} key={getKey(child)} />
        ))}
      </ul>
    );
    return (
      <li className={c["treeView-item"]}>
        <span className={c["treeView-item-body"]}>{render(item)}</span>
        {childrenElem}
      </li>
    );
  }
}

export { TreeViewAttributes };
export { TreeView };
