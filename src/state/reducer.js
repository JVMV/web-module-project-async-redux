import { combineReducers } from 'redux';
import * as types from './action-types';

const initialActivityList = [
    {
        activity: 'Learn how to use chopsticks',
        participants: 1,
        key: 8675309
    },
    {
        activity: 'Play tennis with a friend',
        participants: 2,
        key: 4820525
    }
]

const activities = (activityState = initialActivityList, action) => {
    switch(action.type) {
        case types.ADD_ALL_ACTIVITY: {
            return activityState.concat(action.payload)
        }
        default:
        return activityState
    }
}

export default combineReducers({
    activities
})