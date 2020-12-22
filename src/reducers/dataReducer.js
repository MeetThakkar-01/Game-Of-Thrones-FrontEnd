var initState = {
  query: "",
  results: [],
  message: "",
  loading: true,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
