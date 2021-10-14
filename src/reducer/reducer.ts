import { PUT_DATA, DELETE_BEER, SORT_BY_NAME, SORT_BY_COUNT } from '../actions/actions';

const initialState = {
  data: [],
};

export default function reducer (state = initialState, action: any) {
  switch (action.type) {
  case PUT_DATA:
    return {
      ...state,
      data: action.payload
    }

  case DELETE_BEER:
    const idx = parseInt(action.id);
    const newState = [...state.data.slice(0, idx), ...state.data.slice(idx + 1)];
    return {
      data: newState
    }

  case SORT_BY_COUNT:
    const byCountField = (field: any) => {
      return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
    }
    const sortCountArray = [...state.data.sort(byCountField('ebc'))];
    return {
      data: sortCountArray
    }

  case SORT_BY_NAME:
    const byNameField = (field: any) => {
      return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
    }
    const sortNameArray = [...state.data.sort(byNameField('name'))];
    return {
      data: sortNameArray
    }

  default:
    return state;
  }
};