import {
  ADD_UERS_FAILURE,
  ADD_UERS_REQUEST,
  ADD_UERS_SUCCESS,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  EDIT_UERS_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from './ActionType';

const inistate = {
  islOading: false,
  isError: false,
  data: [],
  adduser: {},
  editUserData: {},
};

export const reducer = (state = inistate, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        islOading: true,
        error: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        islOading: false,
        error: false,
        data: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        islOading: false,
        error: true,
      };

    case DELETE_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_UERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case ADD_UERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        adduser: payload,
      };
    case ADD_UERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      
    case EDIT_UERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        editUserData: payload,
      };

    default:
      return state;
  }
};
