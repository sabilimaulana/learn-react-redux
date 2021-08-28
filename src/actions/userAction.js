import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_UPDATE = "PUT_USER_UPDATE";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/sabilimaulana/sbl-jsonplaceholder/users"
      )
      .then((response) => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (userId) => {
  return (dispatch) => {
    axios
      .get(
        `https://my-json-server.typicode.com/sabilimaulana/sbl-jsonplaceholder/users/${userId}`
      )
      .then((response) => {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        `https://my-json-server.typicode.com/sabilimaulana/sbl-jsonplaceholder/users`,
        data
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteCreatedUser = () => {
  return (dispatch) => {
    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const putUserUpdate = (data, userId) => {
  return (dispatch) => {
    axios
      .put(
        `https://my-json-server.typicode.com/sabilimaulana/sbl-jsonplaceholder/users/${userId}`,
        data
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: PUT_USER_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: PUT_USER_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    axios
      .delete(
        `https://my-json-server.typicode.com/sabilimaulana/sbl-jsonplaceholder/users/${userId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
