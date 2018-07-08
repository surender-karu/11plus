import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../stylesheets/App.css';
import EPNavigation from '../components/EPNavigation'

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <EPNavigation />
        <main role="main">
          <div>
            <div>{children}</div>
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.array.isRequired
}

export default App;