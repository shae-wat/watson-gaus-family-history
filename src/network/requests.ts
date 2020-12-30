import axios from "axios";
import { Ancestor } from "../types/data";

export const getAncestorsForTreeVisualization = (): Promise<{
  [key: string]: Ancestor;
}> =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://watson-gaus-family-history-default-rtdb.firebaseio.com/ancestors.json`
      );
      resolve(res.data);
    } catch (e) {
      reject(e);
    }
  });

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
