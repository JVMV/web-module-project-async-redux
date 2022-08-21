import React from 'react';
import Activity from './Activity';
import { connect } from 'react-redux';

const ActivityList = (props) => {


    return(
        <div>
            <Activity />
        </div>
    )
}

export default connect(st => st)(ActivityList)