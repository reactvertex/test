import { showJsonDataSuccess, showJsonDataError } from "../action/index";
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";

export function* ShowJsonData(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      `https://jsonplaceholder.typicode.com/post/1`,
      // action.payload
    );
    if (response) {
      yield put(showJsonDataSuccess({ response: response }));
    } else {
      yield put(showJsonDataError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(showJsonDataError({ error: "Invalid  details" }));
  }
}
