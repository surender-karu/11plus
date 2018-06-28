import * as ActionConstants from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    contents: {}
}


const home = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.HOME_REQUEST:
            return { ...state, isLoading: true };
        case ActionConstants.HOME_SUCCESS:
            return { ...state, isLoading: false, home: action.home };
        default:
            return initialState;
    }
}

export default home;