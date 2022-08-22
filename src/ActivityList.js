import React, { useEffect } from 'react';
import Activity from './Activity';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'

const ActivityList = (props) => {
    const { activities, getActivities } = props
    useEffect(() => {
        getActivities()
    }, [])

    return(
        <div>
            {activities.map(activity => {
                return <Activity activity={activity} key={activity.key}/>
            })}
        </div>
    )
}

export default connect(st => st, actions)(ActivityList)