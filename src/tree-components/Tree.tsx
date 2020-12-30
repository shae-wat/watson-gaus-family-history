import React from "react";
import { Ancestor } from "../types/data";

function Tree({
  treeData,
  initialMother,
  initialFather,
}: {
  treeData: {
    [key: string]: Ancestor;
  };
  initialMother: string;
  initialFather: string;
}) {
  console.log("treeData", treeData);

  return (
    <div>
      <div>{treeData[initialMother]?.firstName}</div>
      <div>{treeData[initialFather]?.firstName}</div>
    </div>
  );
}

export default Tree;
