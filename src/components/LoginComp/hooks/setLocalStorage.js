const setLocalStorage = (data) => {
  console.log(data, "I am being");
  localStorage.setItem(`${data.uid}`, JSON.stringify(data));
};

export default setLocalStorage;
