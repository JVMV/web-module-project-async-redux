import React from 'react';
import Activity from './Activity';
import { connect } from 'react-redux';

const ActivityList = (props) => {
    const { activities } = props
    return(
        <div>
            {activities.map(activity => {
                return <Activity activity={activity} key={activity.key}/>
            })}
        </div>
    )
}

export default connect(st => st)(ActivityList)