import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import HomePage from '../Pages/HomePage';
import AnatomyExample from '../Pages/AnatomyExample';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={HomePage} initial={true} hideNavBar />
      <Scene key="about" component={AnatomyExample} title="About" />
    </Scene>
  </Router>
);
export default Routes;
