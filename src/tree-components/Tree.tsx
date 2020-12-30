import React from "react";

function Tree({
  treeData,
  initialMother,
  initialFather,
}: {
  treeData: any;
  initialMother: string;
  initialFather: string;
}) {
  console.log("treeData", treeData);

  return (
    <div>
      <div>${initialMother}</div>
      <div>${initialFather}</div>
    </div>
  );
}

export default Tree;
