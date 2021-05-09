import {
  LOGIN_USER,
  REGISTER_USER,
  CREATE_BOARD_USER,
} from "../_actions/type.js";

export default function user_reducer(state = {}, action) {
  switch (action.payload) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case CREATE_BOARD_USER:
      return { ...state, createBoardSuccess: action.payload };
    default:
      return state;
  }
}
