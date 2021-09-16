const getLocalStorage = async () => {
  const localStorageData = await localStorage.getItem("travelBeastUID");
  console.log(localStorageData, "Viiiiii");
  return localStorageData;
};

export default getLocalStorage;
