import React, { Component, PropTypes } from 'react'
import './Trip.css'
import FormattedDate from './FormattedDate'

class Trip extends Component {
  render () {
    const { trip } = this.props

    return (
      <div className="Trip">
        <img
          className="logo"
          src={trip.carrier_logo}
          alt={`${trip.carrier} logo`}
        />
        <div>
          <p className="carrier">
            {trip.carrier}
          </p>
          <p className="times">
            <FormattedDate
              isoString={trip.departure}
            />
            {' - '}
            <FormattedDate
              isoString={trip.arrival}
            />
          </p>
          <p className="origin-destination">
            {trip.from} - {trip.to}
          </p>
        </div>
      </div>
    )
  }
}

Trip.propTypes = {
  trip: PropTypes.object.isRequired,
}

export default Trip
