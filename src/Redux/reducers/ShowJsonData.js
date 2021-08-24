import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const ShowJsonData = (state = initialState, action) => {
    switch (action.type) {
        case constants.SHOW_JSON_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.SHOW_JSON_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.SHOW_JSON_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                ...action.payload.response,
            };
        
        default:
            return {
                ...state,
            };
    }
};
export default ShowJsonData;