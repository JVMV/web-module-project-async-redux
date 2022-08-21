import React from 'react';
import { connect } from 'react-redux';

const Activity = (props) => {

    return(
        <div>
            This is an activity
        </div>
    )
}

export default connect(st => st)(Activity)