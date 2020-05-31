import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import HomePage from '../Pages/HomePage';
// import AnatomyExample from '../Pagess/AnatomyExample';
import {useAuthContext} from '../Contexts/AuthContext';
import FormLogin from '../Pages/Login';

const Routes = () => {
  const {user} = useAuthContext();

  return (
    <Router>
      <Scene key="root">
        {!user ? (
          <Scene key="home" component={FormLogin} initial={true} hideNavBar />
        ) : (
          <Scene key="home" component={HomePage} initial={true} hideNavBar />
        )}
        {/* <Scene key="about" component={AnatomyExample} title="About" /> */}
      </Scene>
    </Router>
  );
};
export default Routes;
