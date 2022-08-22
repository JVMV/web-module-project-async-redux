import React from 'react';

const Activity = (props) => {
    const { activity, participants } = props.activity

    return(
        <div>
            {`The computer gods calculated that you should ${activity}. This requires only ${participants === 1 ? 'you.' : participants + ' people.'}`}
        </div>
    )
}

export default Activity