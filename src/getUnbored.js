import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from './state/action-creators';

const Div = styled.div`

display: flex;
flex-flow: row wrap;
justify-content: center;

button {
    padding: 3%;
    background-color: lightGreen;
    border-radius: 10px;
}

.par {
    font-size: 18px;
    padding: 2%
}
`

const GetUnbored = (props) => {

    return(
        <Div>
            <p className='par'>The computer gods will calculate all the things that you might 
                be interested in and display a random one for you.<br />
                The gods have expected you and found an activity for you already.<br />
                You can always see more activities by pressing the button below.
            </p>
            <button onClick={() => props.getActivities()}>I'm a button</button>
        </Div>
    )
}

export default connect(st => st, actions)(GetUnbored)