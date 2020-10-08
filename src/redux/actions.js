import axios from "axios";

export const requestNumber = () => {
  return async function (dispatch) {
    dispatch({
      type: "FETCH_NUMBER",
    });
    const response = await axios.get(
      "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new"
    );

    dispatch({
      type: "FETCH_NUMBER_SUCCES",
      payload: response.data,
    });
  };
};
