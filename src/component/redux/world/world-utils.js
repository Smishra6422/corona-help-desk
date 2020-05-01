import { GLOBAL_DATA } from "./world-data";
export const updatedData = (oldData, fetchedData) => {
  const newFetchedData = fetchedData.Global;
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = newFetchedData;

  const newDataArray = [
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  ];
  oldData = GLOBAL_DATA.map((data, index) => ({
    ...data,
    number: newDataArray[index],
  }));
  return oldData;
};
