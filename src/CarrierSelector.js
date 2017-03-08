import React, { Component, PropTypes } from 'react'

class CarrierSelector extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  getSortedCarriers (carriers) {
    return carriers.concat().sort()
  }

  handleChange (evt) {
    const selectedCarrier = evt.target.value
    this.props.onChange(selectedCarrier)
  }

  render () {
    const { carriers } = this.props
    const sortedCarriers = this.getSortedCarriers(carriers)

    return (
      <select onChange={this.handleChange}>
        <option value="">All</option>
        {
          sortedCarriers.map(carrier =>
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
  carriers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CarrierSelector
