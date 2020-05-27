import api from "./apiStore";


export const ACTION_TYPES = {
    CREATE: 'CTREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    age:parseInt(data.age?data.age:0)
})


//get all data
export const fetchAll = () => dispatch => {
    api.dCandidate().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

//create
export const create = (data, onSuccess) => dispatch => {
    data = formatData(data);
    api.dCandidate().create(data)
    .then(res => {
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload: res.data
        })

        onSuccess()
    })

    .catch(err => console.log("erör updatiing ", err))
}

//update
export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data);
    api.dCandidate().update(id, data)
    .then(res => {
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload: {id, ...data}
        })

        onSuccess()
    })

    .catch(err => console.log(err))
}


//delete
export const deleteQ = (id, onSuccess) => dispatch => {
    
    api.dCandidate().delete(id)
    .then(res => {
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload: id
        })

        onSuccess()
    })

    .catch(err => console.log(err))
}