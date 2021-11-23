import { all } from "redux-saga/effects";

// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
// 	yield console.log('Saga Running');
// }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
// 	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
// }

export default function* rootSaga() {
	yield all([]);
}
