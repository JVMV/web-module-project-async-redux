import * as types from './action-types'
import axios from 'axios'

const URL = 'https://www.boredapi.com/api/activity'

export const getActivities = () => (dispatch) => {
    axios.get(URL)
        .then(res => {
            dispatch({type: types.ADD_ALL_ACTIVITY, payload: res.data})
        })
        .catch(err => {
            console.log(err.message)
        })
}
