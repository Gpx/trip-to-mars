import React, { Component, PropTypes } from 'react'

class FormattedDate extends Component {
  render () {
    const { isoString } = this.props
    const date = new Date(isoString)

    return (
      <time dateTime={isoString}>
        {date.toDateString()}
      </time>
    )
  }
}

FormattedDate.propTypes = {
  isoString: PropTypes.string.isRequired,
}

export default FormattedDate
