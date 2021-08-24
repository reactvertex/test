import { takeLatest, all, takeEvery } from "redux-saga/effects";
import * as constants from "../constant";
import { ShowJsonData } from "./ShowJsonData";


function* watchActions() {
  yield takeLatest(constants.SHOW_JSON_DATA_REQUEST, ShowJsonData);
}
export default function* rootSaga() {
  yield all([watchActions()]);
}
