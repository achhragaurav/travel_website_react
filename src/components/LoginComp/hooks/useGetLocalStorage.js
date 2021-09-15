const useGetLocalStorage = () => {
  const localStorageData = localStorage.getItem("travelBeastUID");
  return localStorageData;
};

export default useGetLocalStorage;
