import axios from "axios";

export const getAncestorsForTreeVisualization = () =>
  axios.get(
    `https://watson-gaus-family-history-default-rtdb.firebaseio.com/ancestors.json`
  );

export const addAncestorToDB = (data: any) =>
  axios.patch(
    `https://watson-gaus-family-history-default-rtdb.firebaseio.com/ancestors.json`,
    data
  );

export const updateAncestorInfo = ({
  dataFieldToUpdate,
  id,
  dataToUpdate,
}: {
  dataFieldToUpdate: string;
  id: string;
  dataToUpdate: any;
}) =>
  axios.patch(
    `https://watson-gaus-family-history-default-rtdb.firebaseio.com/ancestors/${id}.json`,
    { [dataFieldToUpdate]: dataToUpdate }
  );
