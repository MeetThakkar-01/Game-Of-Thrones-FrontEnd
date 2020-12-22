import dataReducer from "./dataReducer";
const { combineReducers } = require("redux");

export default combineReducers({
  data: dataReducer,
});
