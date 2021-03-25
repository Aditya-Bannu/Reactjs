import React, { useState } from 'react'
import './app.scss'
import Confirm from './Confirm.js'

function Handelling(props) {
    const { ownerDetails } = props
    const [isPayed, setpayed] = useState(false)

    const handleDetailsChange = (event) => {
        props.onHandleChange(event)
    }

    const moneyPayed = (event) => {
        setpayed(true)
    }


    return (

        <div className="second-form">
            {isPayed
                ? <Confirm fullDetails={ownerDetails} />
                : <form className="form" align="center">
                    <h3> <u>Flat:</u> {ownerDetails.flatNo} &nbsp;&nbsp;&nbsp; <u>Name:</u> {ownerDetails.ownerName} &nbsp;&nbsp;&nbsp; <u>Phone Number:</u> {ownerDetails.mobNumber}</h3><br /><br />
                    <label><b>Date of Payment:</b></label>&nbsp;&nbsp;&nbsp;
                <input type="date" name="date" value={ownerDetails.date} onChange={handleDetailsChange} /><br /><br /><br />
                    <label><b>Amount Paying:</b></label>&nbsp;&nbsp;&nbsp;
                <input type="number" name="amount" value={ownerDetails.amount} onChange={handleDetailsChange} /><br /><br />
                    <button onClick={moneyPayed}><b>Pay</b></button>
                </form>
            }
        </div>
    )
}

export default Handelling
