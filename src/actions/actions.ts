export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';
export const DELETE_BEER = 'DELETE_BEER';
export const SORT_BY_COUNT = 'BEER_COUNT_SORT';
export const SORT_BY_NAME = 'BEER_NAME_SORT';

export const putData = (payload: any) => ({type: PUT_DATA, payload});
export const loadData = () => ({type: LOAD_DATA});
export const beerDelete = (id: number) => ({type: DELETE_BEER, id});
export const sortByName = () => ({type: SORT_BY_NAME})
export const sortByCount = () => ({type: SORT_BY_COUNT})
