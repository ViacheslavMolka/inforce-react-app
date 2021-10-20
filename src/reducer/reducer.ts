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
    const sortCountArray = state.data.map(item => item);
    return {
      data: sortCountArray.sort((a, b) => b['ebc'] > a['ebc'] ? 1 : -1)
    }

  case SORT_BY_NAME:
    const sortNameArray = state.data.map(item => item);
    return {
      data: sortNameArray.sort((a, b) => a['name'] > b['name'] ? 1 : -1)
    }

  default:
    return state;
  }
};