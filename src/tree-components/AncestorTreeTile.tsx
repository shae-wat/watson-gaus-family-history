import React from "react";
import styled from "styled-components";
import { Ancestor } from "../types/data";
import { Colors } from "./colors";

const PersonTile = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${Colors.cardBackground};
  color: ${Colors.white};
  margin: 48px 0;
  padding: 24px 16px;
  border-radius: 8px;
`;

function AncestorTreeTile({ ancestor }: { ancestor?: Ancestor }) {
  console.log("ancestor", ancestor);

  return (
    <PersonTile>
      {ancestor?.firstName} {ancestor?.lastName}
    </PersonTile>
  );
}

export default AncestorTreeTile;
