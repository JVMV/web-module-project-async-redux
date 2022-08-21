import React from 'react';

const Activity = (props) => {
    const { activity, participants } = props.activity

    return(
        <div>
            {`${activity} ${participants}`}
        </div>
    )
}

export default Activity