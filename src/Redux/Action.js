import axios from 'axios';
import * as types from './ActionType';

export const getdata = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios
    .get(' http://localhost:8080/users')
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};

export const deletname = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_REQUEST });
  return axios
    .delete(`http://localhost:8080/users/${id}`)
    .then((res) => dispatch({ type: types.DELETE_SUCCESS, payload: res.data }))
    .then(() => dispatch(getdata()))

    .catch((err) => dispatch({ type: types.DELETE_FAILURE }));
};

export const AdduserData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_UERS_REQUEST });
  return axios
    .post(`http://localhost:8080/users/`, payload)
    .then((res) =>
      dispatch({ type: types.ADD_UERS_SUCCESS, payload: res.data })
    )

    .catch((err) => dispatch({ type: types.ADD_UERS_FAILURE }));
};

// edit
export const editUserData =
  ({ id, state }) =>
  (dispatch) => {
    console.log('state', state);
    dispatch({ type: types.EDIT_UERS_REQUEST });
    return axios
      .patch(`http://localhost:8080/users/${id}`, state)
      .then((res) => {
        console.log('res:', res);

        dispatch({ type: types.EDIT_UERS_SUCCESS, payload: res.data });
      })

      .catch((err) => dispatch({ type: types.EDIT_UERS_FAILURE }));
  };
