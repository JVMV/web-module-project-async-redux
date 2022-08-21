import React from 'react'
import { connect } from 'react-redux';

const GetUnbored = (props) => {

    return(
        <div>
            <p>To find something to do, click the button below. The computer gods will calculate all the things that you might be interested in and display a random one for you.</p>
            <button>I'm a button</button>
        </div>
    )
}

export default connect(st => st)(GetUnbored)