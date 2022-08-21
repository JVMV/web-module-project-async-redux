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

const activities = (state, action) => {
    switch(action.type) {
        default:
        return state
    }
}

export default combineReducers({
    activities
})