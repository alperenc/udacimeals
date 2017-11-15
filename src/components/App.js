import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

const mapStateToProps = (calendar) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.assign(calendar[day])
    }))
  }
}

export default connect(mapStateToProps)(App)
