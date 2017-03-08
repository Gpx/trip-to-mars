import React, { Component } from 'react';
import './App.css'
import CarrierSelector from './CarrierSelector'
import Trip from './Trip'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCarrier: '',
      trips: [],
      tripsLoaded: false,
    }

    this.handleCarrierChange = this.handleCarrierChange.bind(this)
  }

  componentDidMount () {
    fetch('trips.json')
      .then(response => response.json())
      .then(trips => this.setState({ trips, tripsLoaded: true }))
  }

  getSelectedTrips (trips, selectedCarrier) {
    const filteredTrips = this.filterTrips(trips, selectedCarrier)
    return filteredTrips.sort((tripA, tripB) =>
        tripA.departure > tripB.departure ? 1 : -1
    )
  }

  filterTrips (trips, selectedCarrier) {
    return (selectedCarrier === '')
      ? trips
      : trips.filter(trip => trip.carrier === selectedCarrier)
  }

  getCarriers (trips) {
    return trips.map(trip => trip.carrier)
      .reduce((carriers, carrier) => (
        carriers.includes(carrier) ? carriers : [carrier, ...carriers]
      ), [])
  }

  handleCarrierChange (selectedCarrier) {
    this.setState({ selectedCarrier })
  }

  render() {
    const { trips, tripsLoaded, selectedCarrier } = this.state
    const visibleTrips = this.getSelectedTrips(trips, selectedCarrier)
    const carriers = this.getCarriers(trips)

    if (!tripsLoaded) {
      return null
    }

    return (
      <div className="App">
        <h1>Trip to Mars</h1>

        <CarrierSelector
          carriers={carriers}
          onChange={this.handleCarrierChange}
        />

        <p>Number of trips: {visibleTrips.length}</p>
        {visibleTrips.map(trip => (
          <Trip
            trip={trip}
            key={trip.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
