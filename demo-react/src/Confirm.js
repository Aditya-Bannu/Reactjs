import React from 'react'
import './app.scss'

function Confirm(props) {
    const { fullDetails } = props
    return (
        <div className="last-page">
            <h1>Payment Sucessful Details</h1>
            <p>
                <b>Name:</b> <u>{fullDetails.ownerName}</u> <br />
                <b>Flat number:</b> <u>{fullDetails.flatNo}</u> <br />
                <b>Mobile number:</b> <u>{fullDetails.mobNumber}</u> <br />
                <b>Date of Payment:</b> <u>{fullDetails.date}</u> <br />
                <b>Amount Payed:</b> <u>{fullDetails.amount}</u>
            </p>
        </div>

    )
}

export default Confirm
