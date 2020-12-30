import React from "react";
import { Ancestor } from "../types/data";
import AncestorTreeTile from "./AncestorTreeTile";

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
      <AncestorTreeTile ancestor={treeData[initialMother]} />
      <AncestorTreeTile ancestor={treeData[initialFather]} />
    </div>
  );
}

export default Tree;
