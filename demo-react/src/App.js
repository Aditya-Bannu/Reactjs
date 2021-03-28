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
        amount: '',
      },
      formErrors: {
        nameError: '',
        numberError: '',
        flatError: '',
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
    alert(`    Flat: ${this.state.ownerDetails.flatNo}
    Name: ${this.state.ownerDetails.ownerName}
    Number: ${this.state.ownerDetails.mobNumber}`)
    event.preventDefault()
  }

  validate = () => {
    let nameError = '';
    let numberError = '';
    let flatError = '';

    if (!this.state.ownerDetails.ownerName) {
      nameError = " Name cant be empty "
    } else if (!this.state.ownerDetails.ownerName.match(/^[a-zA-Z ]+$/)) {
      nameError = " Name cant be number and symbols "
    }

    if (!this.state.ownerDetails.mobNumber) {
      numberError = " Number cant be empty "
    } else if (this.state.ownerDetails.mobNumber.length != 10) {
      numberError = " Number should be 10 digits "
    }


    if (!this.state.ownerDetails.flatNo) {
      flatError = " Flat no cant be empty "
    } else if (!(this.state.ownerDetails.flatNo.length < 4)) {
      flatError = " Check the Flat No "
    }

    if (nameError || numberError || flatError) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          nameError: nameError,
          numberError: numberError,
          flatError: flatError,
        }
      })
      return false;
    }
    return true;
  }

  onClicking = (event) => {
    event.preventDefault()
    const isValid = this.validate();

    if (isValid) {
      this.setState({
        onFormSubmit: true
      })
    }

  }

  render() {
    const { ownerDetails, formErrors, onFormSubmit } = this.state
    console.log('ownerDetails', this.state)
    return (
      <div className="App">

        {onFormSubmit
          ? <Handelling onHandleChange={this.handleUsernameChange} ownerDetails={ownerDetails} />
          : <div className="form-container">
            <h1 align="center"> Hi-Tech Appartments</h1>
            <form align="middle">
              <label><b>Flat No:</b></label><br />
              <input type="number" name="flatNo" value={ownerDetails.flatNo} onChange={this.handleUsernameChange} /><br />
              <span style={{ color: 'red' }}>{formErrors.flatError}</span><br />

              <label><b>Owner Name:</b></label><br />
              <input type="text" name="ownerName" value={ownerDetails.ownerName} onChange={this.handleUsernameChange} /><br />
              <span style={{ color: 'red' }}>{formErrors.nameError}</span><br />
              <label><b>Owner Contact No:</b></label><br />
              <input type="number" name="mobNumber" value={ownerDetails.mobNumber} onChange={this.handleUsernameChange} /><br />
              <span style={{ color: 'red' }}>{formErrors.numberError}</span><br />
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
