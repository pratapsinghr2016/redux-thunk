let callAPI = async ({ url }) => {
  let res = await fetch(url);
  res = await res.json();
  return res;
};

export function getData() {
  return function (dispatch) {
    dispatch({ type: "ASYNC" });
    callAPI({
      url: "https://jsonplaceholder.typicode.com/todos/1",
    })
      .then((res) => {
        dispatch({ type: "ASYNC_SUCCESS", payload: res });
      })
      .catch(() => {
        dispatch({ type: "ASYNC_ERR" });
      });
  };
}
