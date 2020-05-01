import { COUNTRY_DATA } from "./country-data";
export const updatedData = (oldData, fetchedData) => {
  //   const newFetchedData = fetchedData.Global;
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = fetchedData;

  const newDataArray = [
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  ];
  oldData = COUNTRY_DATA.map((data, index) => ({
    ...data,
    number: newDataArray[index],
  }));
  return oldData;
};
