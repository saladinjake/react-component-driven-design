import React from "react";

const Item = (props) => {
  const { children }: { children: React.ReactNode } = props;

  return <div>{children}</div>;
};

const Group = (props) => {
  const { children }: { children: React.ReactNode } = props;

  return <div>{children}</div>;
};

const List = (props) => {
  const { children }: { children: React.ReactNode } = props;

  return <div>{children}</div>;
};

const Panels = (props) => {
  const { children }: { children: React.ReactNode } = props;

  return <div>{children}</div>;
};

const Panel = (props) => {
  const { children }: { children: React.ReactNode } = props;

  return <div>{children}</div>;
};

const Tab = {
  Item,
  Group,
  List,
  Panels,
  Panel,
};

export default Tab;
