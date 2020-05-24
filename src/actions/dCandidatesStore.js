import api from "./apiStore";


export const ACTION_TYPES = {
    CREATE: 'CTREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => {

    return dispatch => {
         api.dCandidate().fetchAll()
        .then(
            response => {
                console.log(response);
                dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload:response.data

                })
            }
        )
        .catch(err => console.log("ERRÖRRR connecting to api", err))
    }
}