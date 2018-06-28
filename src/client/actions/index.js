import axios from 'axios'

import { HOME_SUCCESS, HOME_FAILURE, HOME_REQUEST } from './actionTypes'

const fetchDataSuccess = (data) => ({ type: HOME_SUCCESS, data });
const fetchDataFilure = (err) => ({ type: HOME_FAILURE, err });

const fetchData = () => {
    dispatch(() => { type: HOME_REQUEST });

    return axios.get('/api/home')
        .then(
            response => dispatch(fetchDataSuccess(response.data)),
            err => dispatch(fetchDataFilure(err)));
}

export const loadData = (dispatch, getState) => {
    const { isLoading, contents } = getState().home;

    if (!contents && !isLoading) {
        return dispatch(fetchData())
    }
}