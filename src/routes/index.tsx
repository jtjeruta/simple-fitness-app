import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {useAuthContext} from '../contexts/AuthContext';
import FormLogin from '../screens/Login';
import Dashboard from '../screens/Dashboard';

const Routes = () => {
  const {user} = useAuthContext();

  return (
    <Router>
      <Scene key="root">
        {!user ? (
          <Scene key="home" component={FormLogin} initial={true} hideNavBar />
        ) : (
          <Scene key="home" component={Dashboard} initial={true} hideNavBar />
        )}
      </Scene>
    </Router>
  );
};
export default Routes;
