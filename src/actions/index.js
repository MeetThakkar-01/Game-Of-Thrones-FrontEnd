import axios from "axios";

export const fetchSearchResults = (query) => async (dispatch) => {
  const searchUrl = `https://got-api-web-app.herokuapp.com/search?location=${query}`;
  const res = await axios.get(searchUrl);
  dispatch({ type: "FETCH_DATA", payload: res.data });
};
