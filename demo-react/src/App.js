import './app.scss'
import React, { Component } from 'react'
import Handelling from './Handelling'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ownerDetails: {
        flatNo: '',
        ownerName: '',
        mobNumber: '',
        date: '',
        amount: ''
      },
      onFormSubmit: false
    }
  }
  handleUsernameChange = (event) => {
    console.log(event.target.value)
    const name = event.target.name
    this.setState({
      ownerDetails: {
        ...this.state.ownerDetails,
        [name]: event.target.value
      }
    })
  }
  handleClick = (event) => {
    alert(`    Flat: ${this.state.flatno}
    Name: ${this.state.ownername}
    Number: ${this.state.mobnumber}`)
    event.preventDefault()
  }
  onClicking = () => {
    this.setState({
      onFormSubmit: true,

    })

  }

  render() {
    const { ownerDetails, onFormSubmit } = this.state
    console.log('ownerDetails', ownerDetails)
    return (
      <div className="App">

        {onFormSubmit
          ? <Handelling onHandleChange={this.handleUsernameChange} ownerDetails={ownerDetails} />
          : <div className="form-container">
            <h1 align="center"> Hi-Tech Appartments</h1>
            <form align="middle">
              <label><b>Flat No:</b></label><br />
              <input type="number" name="flatNo" value={ownerDetails.flatNo} onChange={this.handleUsernameChange} /><br />
              <label><b>Owner Name:</b></label><br />
              <input type="text" name="ownerName" value={ownerDetails.ownerName} onChange={this.handleUsernameChange} /><br />
              <label><b>Owner Contact No:</b></label><br />
              <input type="number" name="mobNumber" value={ownerDetails.mobNumber} onChange={this.handleUsernameChange} /><br />

              <button onClick={this.handleClick}><b>Check</b></button>
              <button onClick={this.onClicking}><b>Submit</b></button>

            </form>
          </div>
        }
      </div>
    )
  }
}

export default App
