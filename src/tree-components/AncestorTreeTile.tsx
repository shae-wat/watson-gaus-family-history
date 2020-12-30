import React from "react";
import { Ancestor } from "../types/data";

function AncestorTreeTile({ ancestor }: { ancestor: Ancestor }) {
  console.log("ancestor", ancestor);

  return (
    <div>
      {ancestor.firstName} {ancestor.lastName}
    </div>
  );
}

export default AncestorTreeTile;
