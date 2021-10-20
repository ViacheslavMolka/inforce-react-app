import { takeEvery, put, call } from 'redux-saga/effects';

import { putData, LOAD_DATA } from '../actions/actions';

export async function fetchData() {
    const res = await fetch('https://api.punkapi.com/v2/beers')
    return await res.json();
};

export function* workerLoadData() {
    const data: [] = yield call(fetchData);

    yield put(putData(data.slice(0, 12)));
};

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
};
