import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import AnatomyExample from './Pages';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AnatomyExample />
      </SafeAreaView>
    </>
  );
};

export default App;
