import { createAction } from "redux-actions";
import * as constant from "../constant";


export const showJsonDataRequest = createAction(constant.SHOW_JSON_DATA_REQUEST);
export const showJsonDataSuccess = createAction(constant.SHOW_JSON_DATA_SUCCESS);
export const showJsonDataError = createAction(constant.SHOW_JSON_DATA_ERROR);
