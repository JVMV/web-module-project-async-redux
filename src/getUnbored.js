import React from 'react'
import { connect } from 'react-redux';

const GetUnbored = (props) => {
    console.log(props)

    return(
        <div>
            <p>The computer gods will calculate all the things that you might be interested in and display a random one for you.</p>
            <p>The gods have expected you and found an activity for you already.</p>
            <p>You can always see a new activity by pressing the button below.</p>
            <button>I'm a button</button>
        </div>
    )
}

export default connect(st => st)(GetUnbored)