import React, { Component } from 'react';
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

export default App;