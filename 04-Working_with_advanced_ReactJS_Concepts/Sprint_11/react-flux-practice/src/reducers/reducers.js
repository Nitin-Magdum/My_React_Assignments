import { combineReducers } from "redux";
import { ADD_NUM, SUB_NUM, RESET } from "../actions/actions";

function todo(state, action) {
  switch (action.type) {
    case ADD_NUM:
      return state+1

    case SUB_NUM:
      return state>0 ? state-1: 0

    case RESET:
      return 0

    default:
      return state;
  }
}
function todos(state = 0, action) {
  switch (action.type) {
    case ADD_NUM:
      return todo(state, action);
    case SUB_NUM:
      return todo(state, action);
    case RESET:
      return todo(state, action);
    default:
      return state;
  }
}
const todoApp = combineReducers({
  todos,
});
export default todoApp;
