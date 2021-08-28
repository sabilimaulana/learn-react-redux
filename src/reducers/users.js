import {
  GET_USERS_LIST,
  GET_USER_DETAIL,
  POST_USER_CREATE,
  PUT_USER_UPDATE,
} from "../actions/userAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUserDetail: false,
  errorUserDetail: false,
  getResponseDataUser: false,
  errorResponseDataUser: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };
    case POST_USER_CREATE:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };
    case PUT_USER_UPDATE:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
