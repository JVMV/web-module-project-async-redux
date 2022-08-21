import * as types from './action-types'
import axios from 'axios'

export const getActivities = () => {
    axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
