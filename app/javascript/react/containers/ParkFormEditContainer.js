import React, { Component } from 'react'
import { browserHistory } from 'react-router'


class ParkFormEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkName: '',
      parkAddress: '',
      parkCity: '',
      parkState: '',
      parkZip: '',
      parkDescriptions: '',
      updatedPark: {},
      errors: [],
      works: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleFormUpdate = this.handleFormUpdate.bind(this)
  }

    handleNameChange(event) {
        this.setState({parkName: event.target.value})
    }

    handleAddressChange(event) {
        this.setState({parkAddress: event.target.value})
    }

    handleCityChange(event) {
        this.setState({parkCity: event.target.value})
    }

    handleStateChange(event) {
        this.setState({parkState: event.target.value})
    }

    handleZipChange(event) {
      this.setState({parkZip: event.target.value})
    }

    handleDescriptionChange(event) {
      this.setState({parkDescription: event.target.value})
    }

    handleFormClear(event) {
        this.setState({
            parkName: '',
            parkAddress: '',
            parkCity: '',
            parkState: '',
            parkZip: '',
            parkDescription: '',
            errors: [],
            works: ''
        })
    }

    handleFormUpdate(event) {
        event.preventDefault();
        let formPayload = {
            name: this.state.parkName,
            address: this.state.parkAddress,
            city: this.state.parkCity,
            state: this.state.parkState,
            zip: this.state.parkZip,
            description: this.state.parkDescription
        };
        fetch(`/api/v1/parks/${this.props.params.id}`, {
            credentials: 'same-origin',
            method: 'PATCH',
            body: JSON.stringify(formPayload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                    error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(body => {
            this.setState({ updatedPark: body.park, error: body.errors })
            browserHistory.push(`/parks/${this.props.params.id}`)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }



    componentDidMount() {


      fetch(`/api/v1/parks/${this.props.params.id}`)
      .then(response => {
          if(response.ok) {
              return response;
          } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                  error = new Error(errorMessage);
              throw(error);
          }
      })
      .then(response => response.json())
      .then(body => {
          this.setState({
              parkName: body.park.name,
              parkAddress: body.park.address,
              parkCity: body.park.city,
              parkZip: body.park.zip,
              parkState: body.park.state,
              parkDescriptions: body.park.description,
              parkId: body.park.id
          })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }



    render() {
        return(
            <div>
                <h1>Edit Your Park</h1>
                {this.state.errors}
                {this.state.works}


                <form className='newParkForm' onSubmit={this.handleFormUpdate}>
                    <div className='row'>
                        <label>Park Name:</label>
                        <input type='text' className='parkName' onChange = {this.handleNameChange} value={this.state.parkName}/>
                    </div>

                    <div className='row'>
                        <label>Address:</label>
                        <input type='text' className='parkAddress' onChange = {this.handleAddressChange} value={this.state.parkAddress}/>
                    </div>

                    <div className='row'>
                        <label>City:</label>
                        <input type='text' className='parkCity' onChange = {this.handleCityChange} value={this.state.parkCity}/>
                    </div>

                    <div className='row'>
                        <label>State:</label>
                        <input type='text' className='parkState' onChange = {this.handleStateChange} value={this.state.parkState}/>
                    </div>

                    <div className='row'>
                        <label>Zipcode:</label>
                        <input type='text' className='parkZip' onChange = {this.handleZipChange}value={this.state.parkZip} />
                    </div>

                    <div className='row'>
                        <label>Description:</label>
                        <input type='text' className='parkDescription' onChange = {this.handleDescriptionChange} value={this.state.parkDescriptions}/>
                    </div>

                    <div>
                        <div className='row'>
                            <button className="button">Update Park</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ParkFormEditContainer
