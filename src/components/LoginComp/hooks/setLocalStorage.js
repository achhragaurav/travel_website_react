const setLocalStorage = (data) => {
  console.log(data, "I am being");
  localStorage.setItem(`travelBeastUID`, JSON.stringify(data));
};

export default setLocalStorage;
