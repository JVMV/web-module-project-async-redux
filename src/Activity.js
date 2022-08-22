import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
padding: 5%;
background-color: darkSalmon;
color: white;;
font-weight: bold;
font-size: 20px;
`

const Activity = (props) => {
    const { activity, participants } = props.activity

    return(
        <Div>
            {`The computer gods calculated that you should ${activity}. This requires ${participants === 1 ? 'only you.' : participants + ' people.'}`}
        </Div>
    )
}

export default Activity