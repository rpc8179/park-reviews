import React, { Component } from 'react'

import { browserHistory } from 'react-router'



class ParkFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parkName: '',
            parkAddress: '',
            parkCity: '',
            parkState: '',
            parkZip: '',
            parkDescriptions: '',
            newPark: {},
            errors: []
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleZipChange = this.handleZipChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFormClear = this.handleFormClear.bind(this)
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
            errors: []
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let formPayload = {
            name: this.state.parkName,
            address: this.state.parkAddress,
            city: this.state.parkCity,
            state: this.state.parkState,
            zip: this.state.parkZip,
            description: this.state.parkDescription
        };

        fetch('/api/v1/parks.json', {
            credentials: 'same-origin',
            method: 'POST',
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
            debugger;
            this.setState({
                newPark: body.park,
                errors: body.error})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

    render() {

        return(
            <div>
                <div>
                    {this.state.errors.join(', ')}
                </div>

                <form className='newParkForm'>
                    <div className='row'>
                        <label>Park Name:</label>
                        <input type='text' className='parkName' onChange = {this.handleNameChange}/>
                    </div>

                    <div className='row'>
                        <label>Address:</label>
                        <input type='text' className='parkAddress' onChange = {this.handleAddressChange}/>
                    </div>

                    <div className='row'>
                        <label>City:</label>
                        <input type='text' className='parkCity' onChange = {this.handleCityChange}/>
                    </div>

                    <div className='row'>
                        <label>State:</label>
                        <input type='text' className='parkState' onChange = {this.handleStateChange}/>
                    </div>

                    <div className='row'>
                        <label>Zipcode:</label>
                        <input type='text' className='parkZip' onChange = {this.handleZipChange}/>
                    </div>

                    <div className='row'>
                        <label>Description:</label>
                        <input type='text' className='parkDescription' onChange = {this.handleDescriptionChange}/>
                    </div>

                    <div className='row'>
                        <button className="button" onClick={this.handleFormClear}>Clear Form</button>

                    </div>

                    <div className='row'>
                        <button className="button" onClick={this.handleFormSubmit}>Submit Park</button>

                    </div>
                </form>
            </div>
        )
    }
}
export default ParkFormContainer
