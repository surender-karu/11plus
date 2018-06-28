import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import MockExams from "./MockExams";
import EPShop from "./EPShop";
import OnlineTest from "./OnlineTest";
import FreeResources from "./FreeResources";
import Results from "./Results";
import EPTution from "./EPTution";
import ContactUs from "./ContactUs";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App >
        <Route path="/home" component={Home} />
        <Route path="/mockexams" component={MockExams} />
        <Route path="/epshop" component={EPShop} />
        <Route path="/onlinetest" component={OnlineTest} />
        <Route path="/freeresources" component={FreeResources} />
        <Route path="/results" component={Results} />
        <Route path="/tution" component={EPTution} />
        <Route path="/contactus" component={ContactUs} />
      </App>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
