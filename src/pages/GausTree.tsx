import React, { useEffect, useState } from "react";
import { Page } from "../App";
import { getAncestorsForTreeVisualization } from "../network/requests";
import { Tree } from "../tree-components";

function GausTreePage() {
  const [treeData, setTreeData] = useState({});

  const requestData = async () => {
    try {
      const res = await getAncestorsForTreeVisualization();
      console.log("res", res);
      setTreeData(res?.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <Page>
      <Tree
        treeData={treeData}
        initialFather="Gaus1000"
        initialMother="Markum762"
      />
    </Page>
  );
}

export default GausTreePage;
