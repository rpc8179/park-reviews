import React, { Component } from 'react'

class ParkShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkName: '',
      parkAddress: '',
      parkCity: '',
      parkState: '',
      parkZip: '',
      parkDescription: ''
    }
  }

  componentDidMount() {
    fetch(`/api/v1/parks/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        parkName: response.park.name,
        parkAddress: response.park.address,
        parkCity: response.park.city,
        parkState: response.park.state,
        parkZip: response.park.zip,
        parkDescription: response.park.description
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        {this.state.parkName}
        {this.state.parkAddress}
        {this.state.parkCity}
        {this.state.parkState}
        {this.state.parkZip}
        {this.state.parkDescription}

      </div>
    )
  }


}

export default ParkShowContainer
