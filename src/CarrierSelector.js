import React, { Component, PropTypes } from 'react'

class CarrierSelector extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  getCarriers (trips) {
    return trips
      .map(trip => trip.carrier)
      .reduce((carriers, carrier) => (
        carriers.includes(carrier) ? carriers : [carrier, ...carriers]
      ), [])
      .sort()
  }

  handleChange (evt) {
    const selectedCarrier = evt.target.value
    this.props.onChange(selectedCarrier)
  }

  render () {
    const { trips } = this.props
    const carriers = this.getCarriers(trips)

    return (
      <select onChange={this.handleChange}>
        <option value="">All</option>
        {
          carriers.map(carrier =>
            <option
              key={carrier}
              value={carrier}
            >{carrier}</option>
          )
        }
      </select>
    )
  }
}

CarrierSelector.propTypes = {
  trips: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CarrierSelector
